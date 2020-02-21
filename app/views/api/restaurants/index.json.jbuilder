
@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name, :city, :cuisines, :price_range, :open_time, :close_time
    
    sum = restaurant.reviews.inject(0) do |sum, review|
      sum + review.overall 

    end
    
    json.overall_ratings (sum * 1.0) / (restaurant.reviews.count)

  end

end













# @restaurants.each do |restaurant|
#   json.set! restaurant.id do 
#     json.extract! restaurant, :id, :name, :city, :cuisines, :price_range
#     sum = restaurant.reviews.inject(0) do |sum, review|
#       sum + review.overall 
#     end

#      json.overall_ratings !restaurant.reviews.empty? ? ((sum * 1.0) / (restaurant.reviews.count)) : 0
#   end

# end

