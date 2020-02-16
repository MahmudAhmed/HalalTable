json.set! @review.id do 
  json.extract! @review, :id, :restaurant_id, :user_id, :overall, :food, :service, :ambience, :body
  json.first_name current_user.first_name
  json.last_name current_user.last_name
  json.city current_user.primary_location
  json.total_reviews_by_user current_user.reviews.count
end