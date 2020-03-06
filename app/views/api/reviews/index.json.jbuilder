@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :restaurant_id, :user_id, :overall, :food, :service, :ambience, :body

    json.first_name review.user.first_name
    json.last_name review.user.last_name
    json.city review.user.primary_location
    json.total_reviews_by_user review.user.reviews.count


  end
end



