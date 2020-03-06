@reservations.each do |reservation|
  json.partial! "api/reservations/reservation", reservation: reservation
end

