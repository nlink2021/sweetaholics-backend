'use strict';

const itemArray = []

class Item {
    constructor(name,image,description,price,type){
        this.name = name,
        this.image = image,
        this.description = description,
        this.price = price,
        this.type = type,
        this.createdAt = new Date(),
        this.updatedAt = new Date()
        itemArray.push(this)
    }
}
//cinnies
new Item('Old Skool','https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p1_i1_w1920.jpeg','Classic cinnamon roll with vanilla frosting', 3, 'Cinnamon Roll')
new Item('Cookie Monster','https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p83_i1_w1920.jpeg','Cream cheese frosting topped with homemade chocolate chip cookie dough, chocolate chips & chocolate sauce', 5, 'Cinnamon Roll')
new Item('Caramel Apple Pie','https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p130_i1_w1920.jpeg','Caramel frosting topped with fresh apples, pecans, homemade pie crumble & caramel sauce ', 5, 'Cinnamon Roll')
new Item('Sparkle Berry','https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p133_i1_w1920.jpeg','Chocolate frosting topped with fresh strawberries & sprinkles', 5, 'Cinnamon Roll')
new Item('Campfire Smores','https://www.cinnaholicedgewood.com/uploads/1/3/1/6/131608516/s674386858465580270_p131_i1_w1920.jpeg','Marshmallow frosting topped with graham cookies, marshmallows & chocolate sauce', 5, 'Cinnamon Roll')

// //cookies
new Item('Original Chocolate','https://cdn1.insomniacookies.com/uploads/products/1200__0000_InsomniaCookies_TraditionalCookies_ChocolateChunk_1610248929.png','The Classic Tray bake. Made with smooth dark chocolate.', 3, 'Cookie')
new Item('Pecan and Toffee','https://cdn1.insomniacookies.com/uploads/products/Deluxe_Caramel-1200x1200_1611002530.png', 'Chocolate topped with pecan nut halves and sticky toffee pieces.', 4, 'Cookie')
new Item('Snickerdoodle','https://cdn1.insomniacookies.com/uploads/products/1200__0007_InsomniaCookies_TraditionalCookies_SnickerDoodle-2_1610250364.png', 'A delightfully buttery base covered in cinnamon sugar goodness.', 4, 'Cookie')

//brownies
new Item('Chocolate Chunk Brownie','https://cdn1.insomniacookies.com/uploads/products/Brownies_ChocolateChipBrownie_1610142714.png','A chocolatey delight baked to perfection', 3, 'Brownie')
new Item('Loaded Brownie','https://cdn1.insomniacookies.com/uploads/products/CookieButterBrownie_ProductImage_1200x1200_1618229747.png','A fudgy, chocolate chip brownie slathered in chocolate cookie butter for the ultimate sweet, rich snack.', 4, 'Brownie')

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('items',
     itemArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    // **
    //  * Add commands to revert seed here.
    //  *
    //  * Example:
    await queryInterface.bulkDelete('items', null, {});

  }
};
