// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;
  private frontWheelDiameter: number;
  private frontWheelBrand: string;
  private rearWheelDiameter: number;
  private rearWheelBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
    this.frontWheelDiameter = diameter;
    this.frontWheelBrand = tireBrand;
    this.rearWheelDiameter = diameter;
    this.rearWheelBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.tireBrand;
  }
  // Getter method for Front Wheel diameter
  get getFrontWheelDiameter(): number {
    return this.frontWheelDiameter;
  }

  // Getter method for Front Wheel Brand
  get getFrontWheelBrand(): string {
    return this.frontWheelBrand;
  }

  //Getter method for Rear Wheel Diameter 
  get getRearWheelDiameter(): number {
    return this.rearWheelDiameter;
  }

  // Getter method for Rear Wheel Brand
  get getRearWheelBrand(): string {
    return this.rearWheelBrand;
  }
}

// Export the Wheel class
export default Wheel;
