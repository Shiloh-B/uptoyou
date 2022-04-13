require "httparty"
require 'rack/cors'

class AuthController < ApplicationController
  include HTTParty

  skip_before_action :verify_authenticity_token
  
  def authenticate
  end
  
  def create_account

    headers["Access-Control-Allow-Origin"] = "*"

    @options = {
      body: {
        email: params["email"],
        password: params["password"],
        returnSecureToken: true
      }.to_json,
      headers: {
        "Content-Type": "application/json"
      }
    }

    res = HTTParty.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=#{ENV["FIRE_API_KEY"]}", @options)

    if res["localId"] == nil then
      res_return = res["error"]
      response.status = res["error"]["code"]
    else
      res_return = { uid: res["localId"] }
    end

    response.body = res_return.to_json
    response.content_type = :json
    render json:res_return.to_json
  end

  def sign_in
    

    @options = {
      body: {
        email: params["email"],
        password: params["password"],
        returnSecureToken: true
      }.to_json,
      headers: {
        "Content-Type": "application/json"
      }
    }

    res = HTTParty.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=#{ENV["FIRE_API_KEY"]}", @options)

    if res["localId"] == nil then
      res_return = res["error"]
      response.status = res["error"]["code"]
    else
      res_return = { uid: res["localId"] }
    end

    response.body = res_return.to_json
    response.content_type = :json
    render json:res_return.to_json
  end

  def reset_password
    @options = {
      body: {
        email: params["email"],
        requestType: "PASSWORD_RESET"
      }.to_json,
      headers: {
        "Content-Type": "application/json"
      }
    }

    res = HTTParty.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=#{ENV["FIRE_API_KEY"]}", @options)

    if res["email"] == nil then
      response.status = 400
    else
      response.status = 200
    end

    response.body = res["email"].to_json
    response.content_type = :json
    render json:res["email"].to_json

  end
end
