json.set! @reservation.id do 
  json.extract! @reservation, :id, :restaurant_id, :user_id, :party_size, :date, :time, :special_request

end