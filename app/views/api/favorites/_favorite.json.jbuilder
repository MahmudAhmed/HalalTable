json.set! favorite.id do 
  json.extract! favorite, :id, :restaurant_id, :user_id
  json.restaurant_name favorite.restaurant.name
end