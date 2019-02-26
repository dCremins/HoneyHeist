// Script for generating a random bear
// must be uploaded to the API scripts under game settings
on('chat:message', function(e) {
          if(e.content.substring(8, 23) == "Generating Bear") {
              let type;
              let desc;
              let role;
              let hat;
              let hatImage;
              let bearImage;
              const characterID = e.content.substring(40, 60);
              let rnd = randomInteger(6);
              switch(rnd) {
                  case 1:
                      desc = 'Rookie';
                      break;
                  case 2:
                      desc = 'Washed-Up';
                      break;
                  case 3:
                      desc = 'Retired';
                      break;
                  case 4:
                      desc = 'Unhinged';
                      break;
                  case 5:
                      desc = 'Slick';
                      break;
                  default:
                      desc = 'Incompetent';
              }
              
              rnd = randomInteger(6);
              switch(rnd) {
                  case 1:
                      type = 'Grizzly Bear (Terrify)';
                      break;
                  case 2:
                      type = 'Polar Bear (Swim)';
                      break;
                  case 3:
                      type = 'Panda Bear (Distractingly Adorable)';
                      break;
                  case 4:
                      type = 'Black Bear (Climb)';
                      break;
                  case 5:
                      type = 'Sun Bear (Sense Honey)';
                      break;
                  default:
                      type = 'Honey Badger (Carnage)';
              }
              bearImage = rnd;
              
              rnd = randomInteger(6);
              switch(rnd) {
                  case 1:
                      role = 'Muscle';
                      break;
                  case 2:
                      role = 'Brains';
                      break;
                  case 3:
                      role = 'Driver';
                      break;
                  case 4:
                      role = 'Hacker';
                      break;
                  case 5:
                      role = 'Thief';
                      break;
                  default:
                      role = 'Face';
              }
              
              rnd = randomInteger(6);
              switch(rnd) {
                  case 1:
                      hat = 'Trilby';
                      break;
                  case 2:
                      hat = 'Top';
                      break;
                  case 3:
                      hat = 'Crown';
                      break;
                  case 4:
                      hat = 'Flat-Cap';
                      break;
                  case 5:
                      hat = 'Cowboy';
                      break;
                  default:
                      hat = 'Fez';
              }
              hatImage = rnd;
              
          // Bear Type
             var attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'bearImage'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'bearImage',
                     current: bearImage,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", bearImage);
             }
             var attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'type'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'type',
                     current: type,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", type);
             }
              
          // Hat
             var attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'hat'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'hat',
                     current: hat,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", hat);
             }
             var attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'hatImage'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'hatImage',
                     current: hatImage,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", hatImage);
             }
          // Descriptor
             attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'desc'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'desc',
                     current: desc,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", desc);
             }
          // Role
             attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'role'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'role',
                     current: role,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", role);
             }
             
          // Default stats to 3 each
              attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'bear'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'bear',
                     current: 3,
                     max: 6,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", 3);
             }
             
             attribute = findObjs({
                 _type: "attribute",
                 _characterid: characterID,
                 _name: 'criminal'
             })[0];
             if (attribute == undefined) {
                 createObj("attribute", {
                     name: 'criminal',
                     current: 3,
                     max: 6,
                     characterid: characterID
                 });
             } else {
                 attribute.setWithWorker("current", 3);
             }
             
          // send to chat
             let name;
             chara = findObjs({
                 _type: "character",
                 _id: characterID
             })[0];
             if (chara == undefined) {
                 name = e.who
             } else {
                 name = chara.get('name')
             }
             
             
             sendChat(name, `&{template:default} {{name=${name}}} {{Hat= @{${name}|hat} }} {{Descriptor= @{${name}|desc} }} {{Bear Type= @{${name}|type} }} {{Role= @{${name}|role} }}`, null, {noarchive:true} );
          }
      })
