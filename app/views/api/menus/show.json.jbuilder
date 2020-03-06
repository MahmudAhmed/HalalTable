json.set! @menu.restaurant_id do 
    json.extract! @menu, :id, :restaurant_id
    json.menu_items @menu, :item_1, :item_2, :item_3, :item_4, :item_5, :item_6
end






