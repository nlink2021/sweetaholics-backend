const models = require('../models')

const itemArray = []

class Item {
    constructor(name,description,price,type){
        this.name = name,
        this.description = description,
        this.price = price,
        this.type = type
        itemArray.push(this)
    }
}

new Item('Old Skool','Classic cinnamon roll with vanilla frosting', 3, 'Cinnamon Roll')
new Item('Cookie Monster','Cream cheese frosting topped with homemade chocolate chip cookie dough, chocolate chips & chocolate sauce', 5, 'Cinnamon Roll')
new Item('Caramel Apple Pie','Caramel frosting topped with fresh apples, pecans, homemade pie crumble & caramel sauce ', 5, 'Cinnamon Roll')
new Item('Sparkle Berry','Chocolate frosting topped with fresh strawberries & sprinkles', 5, 'Cinnamon Roll')
new Item('Campfire Smores','Marshmallow frosting topped with graham cookies, marshmallows & chocolate sauce', 5, 'Cinnamon Roll')

new Item('Original Chocolate','The Classic Tray bake. Made with smooth dark chocolate.', 3, 'Brownie')
new Item('Pecan and Toffee','Chocolate topped with pecan nut halves and sticky toffee pieces.', 4, 'Brownie')
new Item('Seasalt and Caramel fudge','Caramel Fudge pieces with a scattering of Cornish seasalt flakes on top', 5, 'Brownie')

new Item('Chocolate Chunk','A rich, buttery vanilla cookie amped up with loads of ooey-gooey milk chocolate chunks.', 3, 'Cookie')
new Item('Snickerdoodle','A delightfully buttery base covered in cinnamon sugar goodness.', 4, 'Cookie')
new Item('Double Chocolate Chunk','Our dark chocolate cookie is taken to its drool-worthy peak with chunks of smooth, melty milk chocolate.', 4, 'Cookie')


itemArray.forEach((item)=>{
    models.item.create(item)
})