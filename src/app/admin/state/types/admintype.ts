export interface Restaurant {
    name: string;
    distance:number;
    is_list: boolean;
  }

  export interface Amenties{
    name:string;
    description:string;
    is_list:boolean;
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

