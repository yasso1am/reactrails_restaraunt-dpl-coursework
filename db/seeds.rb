
1.times do
menu = Menu.create(name: 'Breakfast')
    15.times do
    menu.items.create(
      name: Faker::Food.dish,
      price: Faker::Number.between(1, 30),
    )
    end
end


1.times do
  menu = Menu.create(name: 'Lunch')
      15.times do
      menu.items.create(
        name: Faker::Food.dish,
        price: Faker::Number.between(1, 30),
      )
      end
  end

1.times do
  menu = Menu.create(name: 'Dinner')
      15.times do
      menu.items.create(
        name: Faker::Food.dish,
        price: Faker::Number.between(1, 30),
      )
      end
  end
