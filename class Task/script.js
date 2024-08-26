const createClass=()=>{
    class Vehicle{
        // private:
        //     var make;
        //     var model;

        #make;
        #model;  //private var declaration;

        constructor(make,model){
            this.make=make;
            this.model=model;
        }

        getDetails(){
            return `Make: ${this.make}, Model: ${this.model}`
        }

        static compareVehicles(v1,v2){
            if(v1.#make===v2.#make && v1.#model===v2.#model) return true;
            return false;
        }
    }

    class Car extends Vehicle{
        constructor(make,model,year,mielage){
            super(make,model);
            this.year=year;
            this.mielage=mielage;
        }

        getDetails(){
            console.log(this.make,this.model,this.year,this.mielage);
            
        }
    }

    return Car;
}




const CarClass = createClass();

// const v1=new VehicleClass('Ford','Endeavour');
// const v2=new VehicleClass('Mercedes','GWagon');
// const v3=new VehicleClass('Honda','civic');

const v1=new CarClass('Ford','Endeavour',1998,16.2);
const v2=new CarClass('Mercedes','GWagon',2002,8.4);
const v3=new CarClass('Honda','civic',2009,17);

// const car1Details=v1.getDetails();
// const car2Details=v2.getDetails();
// console.log(car1Details+'\n'+car2Details);

v1.getDetails()
v2.getDetails();

console.log(CarClass.compareVehicles(v1,v2));
