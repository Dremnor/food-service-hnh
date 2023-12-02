
export const COLUMNS = [
    {
        Header: "Nazwa",
        accessor: "ItemName" as const,
    },
    {
        Header: "STR +1 | +2",
        id:'Feps',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Strength +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Strength +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "AGI +1 | +2",
        id:'Feps2',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Agility +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Agility +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "INT +1 | +2",
        id:'Feps3',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Intelligence +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Intelligence +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "CON +1 | +2",
        id:'Feps4',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Constitution +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Constitution +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "PER +1 | +2",
        id:'Feps5',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Perception +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Perception +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "CHA +1 | +2",
        id:'Feps6',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Charisma +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Charisma +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "DEX +1 | +2",
        id:'Feps7',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Dexterity +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Dexterity +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "WIL +1 | +2",
        id:'Feps8',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Will +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "will +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "PSY +1 | +2",
        id:'Feps9',   
        accessor:  (data: { Feps: any[]; }) => {
            var item1 = "0";
            var item2 = "0";
            if(data.Feps){
                data.Feps.forEach(fep => {                        
                        if(fep.Name == "Psyche +1"){
                            item1 = fep.Value
                        } 
                        if(fep.Name == "Psyche +2"){
                            item2 = fep.Value
                        }                    
                });
            }                     
            return item1+" | "+item2;
        },
    },
    {
        Header: "PSY +1 | +2",
        id:'Ingredients9',   
        accessor:  (data: { Ingredients: any[]; }) => {
            var item = "";
            if(data.Ingredients){
                data.Ingredients.forEach(ing => {        
                    if(item != ""){
                        item = [item,ing.Name+":"+ing.Percentage].join(",");
                    } else{
                        item = ing.Name+":"+ing.Percentage;
                    }               
                  
                });
            }                     
            return item;
        },
    },
]
