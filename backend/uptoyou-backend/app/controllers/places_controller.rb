require 'httparty'

class PlacesController < ApplicationController
  include HTTParty

  skip_before_action :verify_authenticity_token

  def places_controller
  end

  def nearby_eats
    @options = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    res = HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{params["lat"]}%2C#{params["lng"]}&type=restaurant&radius=1500&key=#{ENV["PLACES_API_KEY"]}", @options)

    response.body = res.to_json
    response.content_type = :json
    render json:res.to_json
  end

  def eats_photo
    @options = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    res = HTTParty.get("https://maps.googleapis.com/maps/api/place/photo?photo_reference=#{params["photo_url"]}&maxheight=500&maxwidth=500&key=#{ENV["PLACES_API_KEY"]}", @options)

    img = Base64.strict_encode64(res)

    image_url = "data:image/jpeg;base64," + img

    render json:image_url.to_json
  end

end
