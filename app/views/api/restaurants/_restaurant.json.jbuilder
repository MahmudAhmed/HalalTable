ratings_count = { 1 => 0, 2 => 0, 3=> 0, 4=> 0, 5=> 0 }
json.extract! restaurant, :id, :name, :street_address, :city, :state, :zip, :website, :description, :open_time, :close_time, :price_range, :capacity, :cuisines, :owner_id, :lat, :lng

overall_ratings = 0
food_ratings = 0
service_ratings = 0
ambience_ratings = 0


restaurant.reviews.each do |review|
  ratings_count[review.overall] += 1
  
  overall_ratings += review.overall
  food_ratings += review.food
  service_ratings += review.service
  ambience_ratings += review.ambience

end

count = restaurant.reviews.count #total_review for restaurant

total_ratings = ratings_count.each_with_object({}) { |(k, v), hash| hash[k] = "#{(v * 100.0 / count).round(2)}%" }
json.total_ratings total_ratings


json.overall_ratings (overall_ratings * 1.0) / count
json.overall_food_ratings (food_ratings * 1.0) / count
json.overall_service_ratings (service_ratings * 1.0) / count
json.overall_ambience_ratings (ambience_ratings * 1.0) / count
json.photoUrl restaurant.photos.map { |file| url_for(file) }
json.mainPhoto url_for(restaurant.main_photo)

