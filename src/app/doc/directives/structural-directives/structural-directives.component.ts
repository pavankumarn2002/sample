import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For Ng If Concept
  conditionVariable = false;
  show = true;

  //For Ng for Data
  lists = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" },
    { firstName: "Kelvin", lastName: "Cruse" },
    { firstName: "Miller", lastName: "Broose" },
    { firstName: "Robart", lastName: "vennis" }
  ]

  //For Ng For Nested Data
  obj = [
    {
      "title": {
        "plain": "Send Money"
      },
      "fieldset": [
        {
          "label": {
            "plain": "Personal Info Section"
          },
          "fieldset": [
            {
              "field": [
                {
                  "label": {
                    "plain": "First Name"
                  },
                  "value": {
                    "plain": "Bob"
                  },
                  "id": "a_1"
                },
                {
                  "label": {
                    "plain": "Last Name"
                  },
                  "value": {
                    "plain": "Hogan"
                  },
                  "id": "a_2"
                }
              ],
              "id": "a_8"
            }
          ],
          "id": "a_5"
        },
        {
          "label": {
            "plain": "Billing Details Section"
          },
          "fieldset": {
            "field": {
              "choices": {
                "choice": {
                  "label": {
                    "plain": "Gift"
                  },
                  "id": "a_17",
                  "switch": ""
                }
              },
              "label": {
                "plain": "Choose a category:"
              },
              "value": {
                "plain": "Gift"
              },
              "id": "a_14"
            },
            "fieldset": {
              "label": {
                "plain": ""
              },
              "field": [
                {
                  "choices": {
                    "choice": {
                      "label": {
                        "plain": "Other"
                      },
                      "id": "a_25",
                      "switch": ""
                    }
                  },
                  "label": {
                    "plain": "Amount"
                  },
                  "value": {
                    "plain": "Other"
                  },
                  "id": "a_21"
                },
                {
                  "label": {
                    "plain": "Other Amount"
                  },
                  "value": {
                    "plain": "200"
                  },
                  "id": "a_20"
                }
              ],
              "id": "a_26"
            },
            "id": "a_13"
          },
          "id": "a_12"
        }
      ]
    }
  ]

  //Ng Switch Concept Using Two way Data Binding
  num: number = 0;
  date = new Date().getDay()

  //For No Results Found Concept for ng For
  variable = 'No';
  ele() {
    return this.variable = 'Yes';
  }
  variable1 = 'No';
  ele1() {
    return this.variable1 = 'Yes';
  }

  //For Filter Concept For Array Of Objects
  numbers = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Smith", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" },
    { firstName: "Jenney", lastName: "Cruse" },
    { firstName: "Miller", lastName: "Broose" },
    { firstName: "Martin", lastName: "vennis" },
    { firstName: 'Symond', lastName: 'Symon' },
    { firstName: 'Mack', lastName: 'Moory' },
  ];

  searchNames: any;
  x1: any = [];
  noData: string = '';

  searchObj(searchNames: any) {
    let fil = searchNames;
    let fil_arr = this.numbers.map(element =>
      element.firstName.substr(0, fil.length)
    )
    if (Array.isArray(this.namesArr)) {
      for (let key of this.namesArr) {
        key.substr(0, fil.length)
      }
    }

    let count = 0
    this.x1 = [];
    fil_arr.forEach((values, i) => {

      if (fil.length > 0) {
        if (values != fil) {
          if (count < this.numbers.length - 1) {
            this.noData = ' ';
          }
          else {
            this.noData = 'No Data Found';

          }
          count++
        }
        else {
          this.noData = ' ';
          this.x1.push(this.numbers[i]);
        }
      }
      else {
        this.noData = 'Enter Valid Input';
      }
    })
  }

  //For Filter Concept For Arrays 
  searchNames1: any;
  y1: any = [];
  noData1: string = '';
  namesArr = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
 
  searchArr(searchNames1: any) {
    let fil = searchNames1;
    let fil_arr = []
    for (let key of this.namesArr) {
      fil_arr.push(key.substr(0, fil.length))
    }

    let count = 0
    this.y1 = [];
    fil_arr.forEach((values, i) => {

      if (fil.length > 0) {
        if (values != fil) {
          if (count < this.namesArr.length - 1) {
            this.noData1 = ' ';
          }
          else {
            this.noData1 = 'No Data Found';

          }
          count++
        }
        else {
          this.noData1 = ' ';
          this.y1.push(this.namesArr[i]);
        }
      }
      else {
        this.noData1 = 'Enter Valid Input';
      }
    })
  }
}
