@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name, :city
  end
end
