
function sccoter(year, color, model){
  this.year = year;
  this.color = color
  this.model = model
}

let harley = new Scooter(2001,'yello','davidson')

function driver(name, age, experience){
  this.name = name
  this.experience = experience
  this.age = age
  
}

let john = new driver('john', 29, '10 years')

function PickupLocation(address, city){

}

let NYC = new PickupLocation('100 W 47th St', 'New York')
