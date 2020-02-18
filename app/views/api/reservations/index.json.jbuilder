
@reservations.each do |reservation|
  # debugger
  json.set! reservation.id do 
    json.extract! reservation, :id, :restaurant_id, :user_id, :date, :time, :special_request
  end
end

