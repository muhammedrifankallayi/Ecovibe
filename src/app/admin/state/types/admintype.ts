export interface Restaurant {
    name: string;
    distance:number;
    is_list: boolean;
  }

  export interface Amenties{
    amenti:string;
    description:string;
    list:boolean;
  }

export interface items{
    name:string;
    distance_From_Resort:number;
}

  export interface Surroundings{
    type_name:string;
    description:string;

    items:items[]
    is_list:boolean;
  }