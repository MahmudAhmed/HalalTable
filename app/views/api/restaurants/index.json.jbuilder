@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name, :city, :cuisines, :price_range, :open_time, :close_time, :lat, :lng
    json.photoUrl url_for(restaurant.main_photo) if restaurant.main_photo.attached?

    
    sum = restaurant.reviews.inject(0) do |sum, review|
      sum + review.overall 

    end
    
    json.overall_ratings (sum * 1.0) / (restaurant.reviews.count)

  end

end
