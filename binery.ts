const binary = (arr: number[], value: number) => {
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let center = Math.floor((start + end) / 2);
    console.log("Start: ", start, center, end);
  
    while (value !== arr[center]) {
      console.log("Loop: ", start, center, end);
  
      if (value < arr[center]) {
        end = center - 1;
      } else {
        start = center + 1;
        break;
      }
      center = Math.floor((start + end) / 2);
    }
  
    if (value === arr[center]) {
      return center;
    } else {
      return -1;
    }
  };
  
  // console.log(binary([1, 2, 3, 4, 5, 6], 9));
  
  const state: string[] = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];
  
  
  