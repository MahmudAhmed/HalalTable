@restaurants.each do |restaurant|
  json.set! restaurant.id do 
    json.extract! restaurant, :id, :name, :city, :cuisines, :price_range
    
    # sum = restaurant.reviews.inject(0) do |review, sum|
    #   sum += review.overall 
    # end

    # json.set! (sum / restaurant.reviews.count)
  end

end

