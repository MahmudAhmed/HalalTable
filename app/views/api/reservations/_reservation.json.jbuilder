json.set! reservation.id do 
  json.extract! reservation, :id, :restaurant_id, :user_id, :party_size, :date, :time, :status, :special_request
  json.restaurant_name reservation.restaurant.name
  json.photoUrl url_for(reservation.restaurant.main_photo)
end