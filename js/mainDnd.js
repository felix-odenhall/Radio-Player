let classAPIResp = [];
let proficienciesAPIResp = [];


function handleSelectChange(event) {

    var selectElement = event.target;
    var value = selectElement.value;
    console.log(`You've picked ${value}`);
    return value;
}

// function getOption() {
//     return document.getElementById('selectRace').value
//   }
  

// function getRace(data){
//     const wrapperRaces = document.querySelector(".races")
//     console.log(data)
//     for (let i = 0; i < data.results.length; i++) { 
//       }
//     wrapperRaces.innerHTML = `<select id="selectRace">`
//     const select = document.getElementById("selectRace");
//     for (let i = 0; i < data.results.length; i++) { 
//         if(data.results[i].name === "Dwarf"){
//             select.options[select.options.length] = new Option(data.results[i].name);
//         } else if(data.results[i].name === "Human"){
//             select.options[select.options.length] = new Option(data.results[i].name);
//         } else if(data.results[i].name === "Gnome"){
//         select.options[select.options.length] = new Option(data.results[i].name);
//         }
//         }
//     wrapperRaces.innerHTML += `</select>
//     <button onClick="getClass(classAPIResp, getOption())">hello</button>`
// }


// function getClass(data, racePick){
//     const wrapperClass = document.querySelector(".classes")
//     for (let i = 0; i < data.results.length; i++) { 
//         console.log(data.results[i].name)
//         console.log("for loop running")
//       }
//     wrapperClass.innerHTML = `<select id="selectClass">`
//     const select = document.getElementById("selectClass");
//     if(racePick == "Gnome") {
//         for (let i = 0; i < data.results.length; i++) { 
//         if(data.results[i].name === "Fighter"){
//             select.options[select.options.length] = new Option(data.results[i].name);
//         } else if(data.results[i].name === "Bard"){
//             select.options[select.options.length] = new Option(data.results[i].name);
//         } else if(data.results[i].name === "Ranger"){
//         select.options[select.options.length] = new Option(data.results[i].name);
//         }
//         }
//     } else if(racePick == "Dwarf"){
//         for (let i = 0; i < data.results.length; i++) { 
//             if(data.results[i].name === "Barbarian"){
//                 select.options[select.options.length] = new Option(data.results[i].name);
//             } else if(data.results[i].name === "Fighter"){
//                 select.options[select.options.length] = new Option(data.results[i].name);
//             } else if(data.results[i].name === "Ranger"){
//             select.options[select.options.length] = new Option(data.results[i].name);
//             }
//             }
//     }
//     wrapperClass.innerHTML += `</select>
//     <button onClick="getRangedWeapon(proficienciesAPIResp)">hello</button>`
// }

// function getRangedWeapon(data){
//     const wrapperSubclass = document.querySelector(".subclass")
//     for (let i = 0; i < data.results.length; i++) { 
//         console.log(data.results[i].name)
//         console.log("for loop running")
//     }

//     wrapperSubclass.innerHTML = `<select id="selectRangedWeapon">`
//     const select = document.getElementById("selectRangedWeapon");
//     for (let i = 0; i < data.results.length; i++) { 
//         select.options[select.options.length] = new Option(data.results[i].name);
//     }
//     wrapperSubclass.innerHTML += `</select>`
//     // console.log(data[i])
// }

// function getApi() { 
//     fetch("https://www.dnd5eapi.co/api/classes/")
//       .then((response) => response.json()) 
//       .then((data) => {
//         getClasses(data);
//         // console.log(data)
//     })
// }

// const classesEndpoint = "https://www.dnd5eapi.co/api/classes/"
// const racesEndpoint = "https://www.dnd5eapi.co/api/races/"

// async function getDndApi(endpoint) {
//     let response = await fetch("https://www.dnd5eapi.co/api/classes/");
//     let data = await response.json();
    
//     console.log(data)
// } 

// getDndApi(classesEndpoint);
// getDndApi(racesEndpoint);





function getSelectedRace() {
    return document.getElementById('selectRace').value
}

function getSelectedClass() {
    return document.getElementById('selectClass').value
}
  

function getRace(data){
    const wrapperRaces = document.querySelector(".race-container")
    console.log(data)
    for (let i = 0; i < data.results.length; i++) { 
      }
    wrapperRaces.innerHTML = `
    <label for="selectClass">Select your race:</label>
    <br>
    <select class="card-select" id="selectRace">
    <option value="" disabled selected></option>`
    const select = document.getElementById("selectRace");
    for (let i = 0; i < data.results.length; i++) { 
        if(data.results[i].name === "Dwarf"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Human"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Gnome"){
        select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Elf"){
            select.options[select.options.length] = new Option(data.results[i].name);
        }
        }
    wrapperRaces.innerHTML += `</select>
    <button onClick="getClass(classAPIResp, getSelectedRace())">Submit</button>`
}

function getClass(data){
    const wrapperClass = document.querySelector(".class-container")
    for (let i = 0; i < data.results.length; i++) { 
    }
    wrapperClass.innerHTML = `
    <label for="selectClass">Select your class:</label>
    <br>
    <select class="card-select" id="selectClass">
    <option value="" disabled selected></option>`
    const select = document.getElementById("selectClass");
    for (let i = 0; i < data.results.length; i++) { 
        if(data.results[i].name === "Bard"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Fighter"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Ranger"){
        select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Rogue"){
            select.options[select.options.length] = new Option(data.results[i].name);
        }
        }
    wrapperClass.innerHTML += `</select>
    <button onClick="getProficiencies(proficienciesAPIResp, getSelectedClass())">Submit</button>`
}

function getProficiencies(data, proficienciesPick){
    const wrapperProficiencies = document.querySelector(".proficiencies-container")
    for (let i = 0; i < data.results.length; i++) { 
        console.log(data.results[i].name)
        console.log("for loop running")
      }
    wrapperProficiencies.innerHTML = `
    <label for="selectClass">Select a proficiency:</label>
    <br>
    <select class="card-select" id="selectProficiencies">
    <option value="" disabled selected></option>`
    const select = document.getElementById("selectProficiencies");
    if(proficienciesPick == "Bard") {
        for (let i = 0; i < data.results.length; i++) { 
        if(data.results[i].name === "Bagpipes"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Darts"){
            select.options[select.options.length] = new Option(data.results[i].name);
        } else if(data.results[i].name === "Drum"){
        select.options[select.options.length] = new Option("Drums");
        } else if(data.results[i].name === "Skill: Insight"){
            select.options[select.options.length] = new Option("Insight");
        } else if(data.results[i].name === "Skill: Intimidation"){
            select.options[select.options.length] = new Option("Intimidation");
        } else if(data.results[i].name === "Longswords"){
            select.options[select.options.length] = new Option("Longswords");
        } else if(data.results[i].name === "Skill: Persuasion"){
            select.options[select.options.length] = new Option("Persuasion");
        } else if(data.results[i].name === "Skill: Performance"){
            select.options[select.options.length] = new Option("Performance");
        } else if(data.results[i].name === "Viol"){
            select.options[select.options.length] = new Option("Violins");
        }
        }

    } else if(proficienciesPick == "Fighter"){
        for (let i = 0; i < data.results.length; i++) { 
            if(data.results[i].name === "Skill: Acrobatics"){
                select.options[select.options.length] = new Option("Acrobatics");
            } else if(data.results[i].name === "Skill: Animal Handling"){
                select.options[select.options.length] = new Option("Animal Handling");
            } else if(data.results[i].name === "Skill: Athletics"){
                select.options[select.options.length] = new Option("Athletics");
            } else if(data.results[i].name === "Skill: History"){
                select.options[select.options.length] = new Option("History");
            } else if(data.results[i].name === "Skill: Insight"){
                select.options[select.options.length] = new Option("Insight");
            } else if(data.results[i].name === "Skill: Intimidation"){
                select.options[select.options.length] = new Option("Intimidation");
            } else if(data.results[i].name === "Skill: Perception"){
                select.options[select.options.length] = new Option("Perception");
            } else if(data.results[i].name === "Skill: Survival"){
                select.options[select.options.length] = new Option("Survival");
            } 
            }


    } else if(proficienciesPick == "Ranger"){
        for (let i = 0; i < data.results.length; i++) { 
            if(data.results[i].name === "Skill: Animal Handling"){
                select.options[select.options.length] = new Option("Animal Handling");
            } else if(data.results[i].name === "Skill: Athletics"){
                select.options[select.options.length] = new Option("Athletics");
            } else if(data.results[i].name === "Skill: Insight"){
                select.options[select.options.length] = new Option("Insight");
            } else if(data.results[i].name === "Skill: Investigation"){
                select.options[select.options.length] = new Option("Investigation");
            } else if(data.results[i].name === "Skill: Nature"){
            select.options[select.options.length] = new Option("Nature");
            } else if(data.results[i].name === "Skill: Perception"){
                select.options[select.options.length] = new Option("Perception");
            } else if(data.results[i].name === "Skill: Stealth"){
                select.options[select.options.length] = new Option("Stealth");
            } else if(data.results[i].name === "Skill: Survival"){
                select.options[select.options.length] = new Option("Survival");
            } 
            }
    } else if(proficienciesPick == "Rogue"){
        for (let i = 0; i < data.results.length; i++) { 
            if(data.results[i].name === "Skill: Acrobatics"){
                select.options[select.options.length] = new Option("Acrobatics");
            } else if(data.results[i].name === "Skill: Athletics"){
                select.options[select.options.length] = new Option("Athletics");
            } else if(data.results[i].name === "Skill: Deception"){
                select.options[select.options.length] = new Option("Deception");
            } else if(data.results[i].name === "Skill: Insight"){
                select.options[select.options.length] = new Option("Insight");
            } else if(data.results[i].name === "Skill: Intimidation"){
            select.options[select.options.length] = new Option("Intimidation");
            } else if(data.results[i].name === "Skill: Investigation"){
                select.options[select.options.length] = new Option("Investigation");
            } else if(data.results[i].name === "Skill: Perception"){
                select.options[select.options.length] = new Option("Perception");
            } else if(data.results[i].name === "Skill: Performance"){
                select.options[select.options.length] = new Option("Performance");
            } else if(data.results[i].name === "Skill: Persuasion"){
                select.options[select.options.length] = new Option("Persuasion");
            } else if(data.results[i].name === "Skill: Sleight of Hand"){
                select.options[select.options.length] = new Option("Sleight of Hand");
            } else if(data.results[i].name === "Skill: Stealth"){
                select.options[select.options.length] = new Option("Stealth");
            } 
            }
    }
    wrapperProficiencies.innerHTML += `</select>
    <button onClick="getRangedWeapon(proficienciesAPIResp)">Done</button>`
}



function getData() {
    let raceAPICall = fetch("https://www.dnd5eapi.co/api/races");
    let classAPICall = fetch("https://www.dnd5eapi.co/api/classes/");
    let proficienciesAPICall = fetch("https://www.dnd5eapi.co/api/proficiencies");
  
    Promise.all([raceAPICall, classAPICall, proficienciesAPICall])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(finalVals => {
        let raceAPIResp = finalVals[0];
        classAPIResp = finalVals[1];
        proficienciesAPIResp = finalVals[2];
        getRace(raceAPIResp)        
        console.log(raceAPIResp);
        console.log(classAPIResp);
        console.log(proficienciesAPIResp);
      });
  }

  getData()