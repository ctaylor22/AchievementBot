const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const fs = require('fs');


//CHANNELS
var blizzardWorld = '591064005486051329';
var rialto = '591064073416998922';
var numbani = '591064310738976787';
var kingsRow = '591064109441744896';
var route66 = '591064399981051904';
var volskaya = '591089610671521812';
var achievment = '591386445982203934';



let points = require("./points.json");

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    var pointVal = 3456;

    let member = message.mentions.members.first() || message.member, user = member.user;
    user = member.user;

    //ROLES
    let bronze = message.guild.roles.find(role => role.name === "Rank: Bronze");
    let silver = message.guild.roles.find(role => role.name === "Rank: Silver");
    let gold = message.guild.roles.find(role => role.name === "Rank: Gold");
    let platinum = message.guild.roles.find(role => role.name === "Rank: Platinum");
    let diamond = message.guild.roles.find(role => role.name === "Rank: Diamond");
    let master = message.guild.roles.find(role => role.name === "Rank: Master");
    let grandMaster = message.guild.roles.find(role => role.name === "Rank: Grandmaster");
    let top500 = message.guild.roles.find(role => role.name === "Rank: Top 500");
    let mod = message.guild.roles.find(role => role.name === "Mod");
    let leadDeveloper = message.guild.roles.find(role => role.name === "Lead Developer");

    let kingsRowVictor = message.guild.roles.find(role => role.name === "King's Row Victor");
    let kingsRowHost = message.guild.roles.find(role => role.name === "King's Row Host");
    let kingsRowLegend = message.guild.roles.find(role => role.name === "King's Row LEGEND");
    let kingsRowChampion = message.guild.roles.find(role => role.name === "King's Row CHAMPION");

    let blizzardWorldVictor = message.guild.roles.find(role => role.name === "Blizzard World Victor");
    let blizzardWorldHost = message.guild.roles.find(role => role.name === "Blizzard World Host");
    let blizzardWorldLegend = message.guild.roles.find(role => role.name === "Blizzard World LEGEND");
    let blizzardWorldChampion = message.guild.roles.find(role => role.name === "Blizzard World CHAMPION");

    let volskayaVictor = message.guild.roles.find(role => role.name === "Volskaya Victor");
    let volskayaHost = message.guild.roles.find(role => role.name === "Volskaya Host");
    let volskayaLegend = message.guild.roles.find(role => role.name === "Volskaya LEGEND");
    let volskayaChampion = message.guild.roles.find(role => role.name === "Volskaya CHAMPION");

    let numbaniVictor = message.guild.roles.find(role => role.name === "Numbani Victor");
    let numbaniHost = message.guild.roles.find(role => role.name === "Numbani Host");
    let numbaniLegend = message.guild.roles.find(role => role.name === "Numbani LEGEND");
    let numbaniChampion = message.guild.roles.find(role => role.name === "Numbani CHAMPION");

    let route66Victor = message.guild.roles.find(role => role.name === "Route 66 Victor");
    let route66Host = message.guild.roles.find(role => role.name === "Route 66 Host");
    let route66Legend = message.guild.roles.find(role => role.name === "Route 66 LEGEND");
    let route66Champion = message.guild.roles.find(role => role.name === "Route 66 CHAMPION");

    let rialtoVictor = message.guild.roles.find(role => role.name === "Rialto Victor");
    let rialtoHost = message.guild.roles.find(role => role.name === "Rialto Host");
    let rialtoLegend = message.guild.roles.find(role => role.name === "Rialto LEGEND");
    let rialtoChampion = message.guild.roles.find(role => role.name === "Rialto CHAMPION");

    let meatballs = message.guild.roles.find(role => role.name === "MEATBALLS");
    let bronzebeard = message.guild.roles.find(role => role.name === "Bronzebeard");
    let treebjorn = message.guild.roles.find(role => role.name === "Treebjorn");
    let torby2D = message.guild.roles.find(role => role.name === "2D Torby");
    let wildWestDwarf = message.guild.roles.find(role => role.name === "The Wild West Dwarf");
    let myBaby = message.guild.roles.find(role => role.name === "My Baby!");


    let friend = message.guild.roles.find(role => role.name === "Friend");
    let developer = message.guild.roles.find(role => role.name === "Developer");
    let feedback = message.guild.roles.find(role => role.name === "Feedback");
    let betaTester = message.guild.roles.find(role => role.name === "Beta Tester");
    let radar = message.guild.roles.find(role => role.name === "No Radar No Problem");



    var testArray = [1, 2, 3, 4, 5, 6]

    var curRoles = member.roles.map(r => `${r}`);
    curRoles.shift();
    for (var i = 0; i < curRoles.length; i++) {
        curRoles[i] = curRoles[i].replace(/[&\/\\#,+()$~%.@'":*?<>{}]/g, '');


    }
    var messageArray = message.content.toLowerCase().split(" ");

    if (message.member.roles.some(role => role.name === 'Mod')) {

        if (message.content.startsWith(prefix + 'achieve')) {
            if (message.mentions.members.first()) {
                if (message.channel.id === kingsRow) {

                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === kingsRowVictor.name) && message.mentions.members.first().roles.find(r => r.name === kingsRowHost.name)) {
                            curRoles.unshift(kingsRowLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + kingsRowVictor.id + `` && val !== '' + kingsRowHost.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*King's Row CHAMPION* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: King's Row LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(kingsRowChampion.id);
                            message.channel.send("*King's Row CHAMPION* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }

                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === kingsRowVictor.name) && message.mentions.members.first().roles.find(r => r.name === kingsRowChampion.name)) {
                            curRoles.unshift(kingsRowLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + kingsRowVictor.id + `` && val !== '' + kingsRowChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*King's Row Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: King's Row LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(kingsRowHost.id);
                            message.channel.send("*King's Row Host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === kingsRowHost.name) && message.mentions.members.first().roles.find(r => r.name === kingsRowChampion.name)) {
                            curRoles.unshift(kingsRowLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + kingsRowHost.id + `` && val !== '' + kingsRowChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*King's Row Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: King's Row LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(kingsRowVictor.id);
                            message.channel.send("*King's Row Victor* unlocked! +10 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === 'radar') {
                        message.mentions.members.first().addRole(radar.id);
                        message.channel.send("*King's Row No Radar No Problem* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                    } else {
                        message.channel.send("Invalid Achievement, Check to see if they already have role");
                    }

                } else if (message.channel.id === blizzardWorld) {
                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === blizzardWorldHost.name) && message.mentions.members.first().roles.find(r => r.name === blizzardWorldVictor.name)) {
                            curRoles.unshift(blizzardWorldLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + blizzardWorldVictor.id + `` && val !== '' + blizzardWorldHost.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Blizzard World CHAMPION* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Blizzard World LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(blizzardWorldChampion.id);
                            message.channel.send("*Blizzard World CHAMPION* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === blizzardWorldChampion.name) && message.mentions.members.first().roles.find(r => r.name === blizzardWorldVictor.name)) {
                            curRoles.unshift(blizzardWorldLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + blizzardWorldVictor.id + `` && val !== '' + blizzardWorldChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Blizzard World Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Blizzard World LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(blizzardWorldHost.id);
                            message.channel.send("*Blizzard World Host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === blizzardWorldChampion.name) && message.mentions.members.first().roles.find(r => r.name === blizzardWorldHost.name)) {
                            curRoles.unshift(blizzardWorldLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + blizzardWorldHost.id + `` && val !== '' + blizzardWorldChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Blizzard World Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Blizzard World LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(blizzardWorldVictor.id);
                            message.channel.send("*Blizzard World Victor* unlocked! +10 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === 'bronzebeard') {
                        message.mentions.members.first().addRole(bronzebeard.id);
                        message.channel.send("*Bronzebeard* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                        metaTorbCheck();
                    } else {
                        message.channel.send("Invalid Achievement");
                    }

                } else if (message.channel.id === volskaya) {
                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === volskayaHost.name) && message.mentions.members.first().roles.find(r => r.name === volskayaVictor.name)) {
                            curRoles.unshift(volskayaLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + volskayaHost.id + `` && val !== '' + volskayaVictor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Volskaya CHAMPION* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Volskaya LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(volskayaChampion.id);
                            message.channel.send("*Volskaya CHAMPION* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === volskayaChampion.name) && message.mentions.members.first().roles.find(r => r.name === volskayaVictor.name)) {
                            curRoles.unshift(volskayaLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + volskayaChampion.id + `` && val !== '' + volskayaVictor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Volskaya Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Blizzard World LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(volskayaHost.id);
                            message.channel.send("*Volskaya host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === volskayaChampion.name) && message.mentions.members.first().roles.find(r => r.name === volskayaHost.name)) {
                            curRoles.unshift(volskayaLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + volskayaChampion.id + `` && val !== '' + volskayaHost.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Volskaya Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Volskaya LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(volskayaVictor.id);
                            message.channel.send("*Volskaya Victor* unlocked! +10 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === '2dtorby') {
                        message.mentions.members.first().addRole(torby2D.id);
                        message.channel.send("*2D Torby* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                        metaTorbCheck();
                    } else {
                        message.channel.send("Invalid Achievement");
                    }

                } else if (message.channel.id === numbani) {
                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === numbaniHost.name) && message.mentions.members.first().roles.find(r => r.name === numbaniVictor.name)) {
                            curRoles.unshift(numbaniLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + numbaniVictor.id + `` && val !== '' + numbaniHost.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Numbani CHAMPION* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Numabani LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(numbaniChampion.id);
                            message.channel.send("*Numbani CHAMPION* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === numbaniChampion.name) && message.mentions.members.first().roles.find(r => r.name === numbaniVictor.name)) {
                            curRoles.unshift(numbaniLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + numbaniVictor.id + `` && val !== '' + numbaniChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Numbani Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Numabani LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(numbaniHost.id);
                            message.channel.send("*Numbani Host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === numbaniChampion.name) && message.mentions.members.first().roles.find(r => r.name === numbaniHost.name)) {
                            curRoles.unshift(numbaniLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + numbaniHost.id + `` && val !== '' + numbaniChampion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Numbani Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Numabani LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(numbaniVictor.id);
                            message.channel.send("*Numbani Victor* unlocked! +10 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === 'treebjorn') {
                        message.mentions.members.first().addRole(treebjorn.id);
                        message.channel.send("*Treebjorn* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                        metaTorbCheck();
                    } else {
                        message.channel.send("Invalid Achievement");
                    }

                } else if (message.channel.id === route66) {
                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === route66Host.name) && message.mentions.members.first().roles.find(r => r.name === route66Victor.name)) {
                            curRoles.unshift(route66Legend.id);
                            var newRoles = curRoles.filter(val => val !== '' + route66Host.id + `` && val !== '' + route66Victor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Route 66 CHAMPION* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Route 66 LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(route66Champion.id);
                            message.channel.send("*Route 66 CHAMPION* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === route66Champion.name) && message.mentions.members.first().roles.find(r => r.name === route66Victor.name)) {
                            curRoles.unshift(route66Legend.id);
                            var newRoles = curRoles.filter(val => val !== '' + route66Champion.id + `` && val !== '' + route66Victor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Route 66 Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Route 66 LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(route66Host.id);
                            message.channel.send("*Route 66 Host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === route66Host.name) && message.mentions.members.first().roles.find(r => r.name === route66Champion.name)) {
                            curRoles.unshift(route66Legend.id);
                            var newRoles = curRoles.filter(val => val !== '' + route66Host.id + `` && val !== '' + route66Champion.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Route 66 Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Route 66 LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(route66Victor.id);
                            message.channel.send("*Route 66 Victor* unlocked! +20 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === 'thewildwestdwarf') {
                        message.mentions.members.first().addRole(wildWestDwarf.id);
                        message.channel.send("*The Wild West Dwarf* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                        metaTorbCheck();
                    } else {
                        message.channel.send("Invalid Achievement");
                    }

                } else if (message.channel.id === rialto) {
                    if (messageArray[2] === 'champion') {
                        if (message.mentions.members.first().roles.find(r => r.name === rialtoHost.name) && message.mentions.members.first().roles.find(r => r.name === rialtoVictor.name)) {
                            curRoles.unshift(rialtoLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + rialtoHost.id + `` && val !== '' + rialtoVictor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Rialto CHAMPION* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Rialto LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(rialtoChampion.id);
                            message.channel.send("*Rialto Champion* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'host') {
                        if (message.mentions.members.first().roles.find(r => r.name === rialtoChampion.name) && message.mentions.members.first().roles.find(r => r.name === rialtoVictor.name)) {
                            curRoles.unshift(rialtoLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + rialtoChampion.id + `` && val !== '' + rialtoVictor.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Rialto Host* unlocked! +20 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Rialto LEGEND* earned! +50 :competitive_points:");
                            pointVal = 70;
                        } else {
                            message.mentions.members.first().addRole(rialtoHost.id);
                            message.channel.send("*Rialto Host* unlocked! +20 :competitive_points: !");
                            pointVal = 20;
                        }
                    } else if (messageArray[2] === 'victor') {
                        if (message.mentions.members.first().roles.find(r => r.name === rialtoChampion.name) && message.mentions.members.first().roles.find(r => r.name === rialtoHost.name)) {
                            curRoles.unshift(rialtoLegend.id);
                            var newRoles = curRoles.filter(val => val !== '' + rialtoChampion.id + `` && val !== '' + rialtoHost.id + ``);
                            message.mentions.members.first().setRoles(newRoles);
                            message.channel.send("*Rialto Victor* unlocked! +10 :competitive_points: !");
                            message.channel.send("*Meta Achievement: Rialto LEGEND* earned! +50 :competitive_points:");
                            pointVal = 60;
                        } else {
                            message.mentions.members.first().addRole(rialtoVictor.id);
                            message.channel.send("*Rialto Victor* unlocked! +10 :competitive_points: !");
                            pointVal = 10;
                        }
                    } else if (messageArray[2] === 'meatballs') {
                        message.mentions.members.first().addRole(meatballs.id);
                        message.channel.send("*MEATBALLS* unlocked! +10 :competitive_points: !");
                        pointVal = 10;
                        metaTorbCheck();
                    } else {
                        message.channel.send("Invalid Achievement");
                    }

                } else if (messageArray[2] === 'friend') {
                    message.mentions.members.first().addRole(friend.id);
                    message.channel.send("*Friend* unlocked! +10 :competitive_points: !");
                    pointVal = 10;
                } else if (messageArray[2] === 'developer') {
                    message.mentions.members.first().addRole(developer.id);
                    message.channel.send("*Developer* unlocked! +10 :competitive_points: !");
                    pointVal = 10;
                } else if (messageArray[2] === 'beta') {
                    message.mentions.members.first().addRole(betaTester.id);
                    message.channel.send("*Beta Tester* unlocked! +10 :competitive_points: !");
                    pointVal = 10;
                } else if (messageArray[2] === 'feedback') {
                    message.mentions.members.first().addRole(feedback.id);
                    message.channel.send("*Feedback* unlocked! +10 :competitive_points: !");
                    pointVal = 10;
                } else {
                    message.channel.send('Invalid Map Channel');
                }



                //META ACHIEVEMENT FOR TORBJORN


                //message.delete(1000);

                // if (messageArray[2] === 'kingsrow') {
                //     if (messageArray[3] === 'champion') {
                //         if (message.mentions.members.first().roles.some(r=>[kingsRowHost.name, kingsRowVictor.name].includes(r.name))) {
                //             client.channels.get(kingsRow).send(`King's Row CHAMPION unlocked! +20 :competitive_points: !`);
                //             client.channels.get(kingsRow).send(`Meta Achievement: King's Row LEGEND earned! +50 :competitive_points: !`);
                //             roles = roles.push(kingsRowLegend.name)
                //             roles.filter()
                //             message.mentions.members.first().setRoles(roles);
                //             console.log(roles);
                //             }
                //         } else {
                //             message.mentions.members.first().addRole(kingsRowChampion.id);
                //         }
                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else if (messageArray[3] === 'noradarnoproblem') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }

                // } else if (messageArray[2] === 'blizzardworld') {
                //     if (messageArray[3] === 'champion') {

                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }


                // } else if (messageArray[2] === 'rialto') {
                //     if (messageArray[3] === 'champion') {

                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else if (messageArray[3] === 'meatballs') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }

                // } else if (messageArray[2] === 'numbani') {
                //     if (messageArray[3] === 'champion') {

                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }


                // } else if (messageArray[2] === 'route66') {
                //     if (messageArray[3] === 'champion') {

                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }


                // } else if (messageArray[2] === 'volskaya') {
                //     if (messageArray[3] === 'champion') {

                //     } else if (messageArray[3] === 'host') {

                //     } else if (messageArray[3] === 'victor') {

                //     } else {
                //         message.channel.send('Invalid Achievement')
                //     }

                if (!points[message.mentions.members.first()]) {
                    points[message.mentions.members.first()] = {
                        points: 0
                    };
                }

                if (pointVal != 3456) {
                    points[message.mentions.members.first()] = {
                        points: points[message.mentions.members.first()].points + pointVal
                    };
                    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
                        if (err) console.log(err)
                    });
                    let pointEmbed = new Discord.RichEmbed()
                        .setAuthor(message.mentions.members.first().user.username)
                        .setColor("#800080")
                        .addField(pointVal + ' <:competitive_points:592153455762735105> added!');
                    message.channel.send(pointEmbed).then(msg => {msg.delete(50000)});
                }
                //     if (message.channel.id === kingsRow) {
                //         if (messageArray[2] === 'champion') {
                //             if (message.member.roles.some(role => role.name === "King's Row Host")) {
                //                 message.mentions.members.first().addRole(kingsRowLegend.id);
                //                 message.channel.send(message.mentions.members.first() + "King's Row CHAMPION unlocked! +20 :competitive_points: !");
                //                 message.channel.send(message.mentions.members.first() + "Meta Achievement: King's Row LEGEND earned! +50 :competitive_points:");
                //             } else {
                //                 message.mentions.members.first().addRole(kingsRowChampion.id);
                //                 message.channel.send("RIP");
                //             }

                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(kingsRowHost.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(kingsRowVictor.id);
                //         } else if (messageArray[2] === 'radar') {
                //             message.mentions.members.first().addRole(radar.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (message.channel.id === blizzardWorld) {
                //         if (messageArray[2] === 'champion') {
                //             message.mentions.members.first().addRole(blizzardWorldChampion.id);
                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(kingsRowHost.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(kingsRowVictor.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (message.channel.id === volskaya) {
                //         if (messageArray[2] === 'champion') {
                //             message.mentions.members.first().addRole(volskayaChampion.id);
                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(volskayaHost.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(volskayaVictor.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (message.channel.id === numbani) {
                //         if (messageArray[2] === 'champion') {
                //             message.mentions.members.first().addRole(numbaniChampion.id);
                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(numbaniHost.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(numbaniVictor.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (message.channel.id === route66) {
                //         if (messageArray[2] === 'champion') {
                //             message.mentions.members.first().addRole(route66Champion.id);
                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(route66Host.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(route66Victor.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (message.channel.id === rialto) {
                //         if (messageArray[2] === 'champion') {
                //             message.mentions.members.first().addRole(rialtoChampion.id);
                //         } else if (messageArray[2] === 'host') {
                //             message.mentions.members.first().addRole(rialtoHost.id);
                //         } else if (messageArray[2] === 'victor') {
                //             message.mentions.members.first().addRole(rialtoVictor.id);
                //         } else if (messageArray[2] === 'meatballs') {
                //             message.mentions.members.first().addRole(meatballs.id);
                //         } else {
                //             message.channel.send("Invalid Achievement");
                //         }

                //     } else if (messageArray[2] === 'friend') {
                //         message.mentions.members.first().addRole(friend.id);
                //     } else if (messageArray[2] === 'developer') {
                //         message.mentions.members.first().addRole(developer.id);
                //     } else if (messageArray[2] === 'beta') {
                //         message.mentions.members.first().addRole(betaTester.id);
                //     } else if (messageArray[2] === 'feedback') {
                //         message.mentions.members.first().addRole(feedback.id);
                //     } else {
                //         message.channel.send('Invalid Map Channel');
                //     }


            }
        }
    }

});

client.login(token);

// let embed = new Discord.RichEmbed()
//     .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
//     .setDescription(`${user}`)
//     .setColor(`RANDOM`)
//     .setThumbnail(`${user.displayAvatarURL}`)
//     .addField('Status:', user.presence.status, true)
//     .addField('Roles:', member.roles.map(r => `${r}`).join(' , '), true)
//     .setFooter(`ID: ${user.id}`)
//     .setTimestamp();
// message.channel.send({ embed: embed });

