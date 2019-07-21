
//Darioush's work


    //orginal function for data mouse over window
    // function toolTipContent(e) {
    //     var str = "";
    //     var total = 0;
    //     var str2, str3;
    //     for (var i = 0; i < e.entries.length; i++){
    //         var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
    //         total = e.entries[i].dataPoint.y + total;
    //         str = str.concat(str1);
    //     }
    //     str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).label()+"</strong></span><br/>";
    //     total = Math.round(total * 100) / 100;
    //     str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
    //     return (str2.concat(str)).concat(str3);
    // }


//Evans work
$("#find-player").on("click", function(event) {
    $.ajax({
        url: "https://nba-players.herokuapp.com/players-stats",
        method: "GET"
    }).done(function(response) {
        console.log('this is the repsonse');
        console.log(response);
      
        // Creates name variable as the value of player-input
        let name = $('#player-input').val();
        
        // Creates foundPlayerData variable that runs the .find function called playerData 
        // which will return the value of the first valid input
        let foundPlayerData = response.find((playerData) => {    
        
        // Stops the function and returns playerData value from the corresponding name value of our array
            return playerData.name.toLowerCase() === name.toLowerCase();
        });
        
        console.log(`The player you have serached for is ${name}`);
        console.log('This was the data I found');
        console.log(foundPlayerData);
      

        let newName = foundPlayerData.name.replace(' ', '-');
        console.log(newName);
       
        if ($('.' + newName).length) {
             return false;    
        } else { 
        //playerView.append(`<div class=${newName}>${JSON.stringify(foundPlayerData)}</div>`);
        //$('#playerName').text(JSON.stringify(foundPlayerData.name).replace(/['"]+/g, ''));
        //$('#playerTeam').text(JSON.stringify(foundPlayerData.team_name).replace(/['"]+/g, ''));
        
        $('#player-input').val("");

        //BEGIN DOM HACKERY
        //DIV STRUCTURE
        var rightColumn = $('<div>');
        rightColumn.addClass('panel-table');

        var leftColumn = $('<div>');
        // leftColumn.addClass('panel-table');

        //PLAYER NAME
        var playerCardName = $('<h1>');
        playerCardName.addClass('display-5');
        playerCardName.addClass('playerInfo');
        playerCardName.text(JSON.stringify(foundPlayerData.name).replace(/['"]+/g, ''));


        //PLAYER TEAM
        var playerCardTeam = $('<p>');
        playerCardTeam.addClass('playerInfo')
        playerCardTeam.text(JSON.stringify(foundPlayerData.team_name).replace(/['"]+/g, ''));


        // TABLE
        var table = $('<table>');
        var tableBody = $('<tbody>');


        // TABLE CATEGORIES
        var tableCategories = $('<tr>');
        tableCategories.attr('id', 'categories');

        var gamesPlayedCat = $('<td>');
        gamesPlayedCat.text('GP');
        var minutesPlayedCat = $('<td>');
        minutesPlayedCat.text('MIN');
        var fieldGoalsMadeCat = $('<td>');
        fieldGoalsMadeCat.text('FGM');
        var fieldGoalsAttemptedCat = $('<td>');
        fieldGoalsAttemptedCat.text('FGA');
        var fieldGoalsPercentCat = $('<td>');
        fieldGoalsPercentCat.text('FGP');
        var threePointMadeCat = $('<td>');
        threePointMadeCat.text('3PM');
        var threePointAttemptedCat = $('<td>');
        threePointAttemptedCat.text('3PA');
        var threePointPercentCat = $('<td>');
        threePointPercentCat.text('3PP');
        var freeThrowsPercentCat = $('<td>');
        freeThrowsPercentCat.text('FTP');
        var offesensiveReboundsCat = $('<td>');
        offesensiveReboundsCat.text('ORB');
        var defensiveReboundsCat = $('<td>');
        defensiveReboundsCat.text('DRB');
        var reboundsCat = $('<td>');
        reboundsCat.text('RB');
        var assistsCat = $('<td>');
        assistsCat.text('AST');
        var stealsCat = $('<td>');
        stealsCat.text('STL');
        var blocksCat = $('<td>');
        blocksCat.text('BLK');
        var turnoversCat = $('<td>');
        turnoversCat.text('TO');
        var playerEfficiencyCat = $('<td>');
        playerEfficiencyCat.text('PE');
        var pointsCat = $('<td>');
        pointsCat.addClass('finalEntry');
        pointsCat.text('PTS');

        tableCategories.append(gamesPlayedCat, minutesPlayedCat, fieldGoalsMadeCat, fieldGoalsAttemptedCat, fieldGoalsPercentCat, threePointMadeCat, threePointAttemptedCat, threePointPercentCat, freeThrowsPercentCat, offesensiveReboundsCat, defensiveReboundsCat, reboundsCat, assistsCat, stealsCat, blocksCat, turnoversCat, playerEfficiencyCat, pointsCat);

        tableBody.append(tableCategories);


        //TABLE STATS

        var tableStats = $('<tr>');
        tableStats.attr('id', 'stats');

        var gamesPlayedStat = $('<td>');
        gamesPlayedStat.text(JSON.stringify(foundPlayerData.games_played).replace(/['"]+/g, ''));
        var minutesPlayedStat = $('<td>');
        minutesPlayedStat.text(JSON.stringify(foundPlayerData.minutes_per_game).replace(/['"]+/g, ''));
        var fieldGoalsMadeStat = $('<td>');
        fieldGoalsMadeStat.text(JSON.stringify(foundPlayerData.field_goals_made_per_game).replace(/['"]+/g, ''));
        var fieldGoalsAttemptedStat = $('<td>');
        fieldGoalsAttemptedStat.text(JSON.stringify(foundPlayerData.field_goals_attempted_per_game).replace(/['"]+/g, ''));
        var fieldGoalsPercentStat = $('<td>');
        fieldGoalsPercentStat.text(JSON.stringify(foundPlayerData.field_goal_percentage).replace(/['"]+/g, ''));
        var threePointMadeStat = $('<td>');
        threePointMadeStat.text(JSON.stringify(foundPlayerData.three_point_made_per_game).replace(/['"]+/g, ''));
        var threePointAttemptedStat = $('<td>');
        threePointAttemptedStat.text(JSON.stringify(foundPlayerData.three_point_attempted_per_game).replace(/['"]+/g, ''));
        var threePointPercentStat = $('<td>');
        threePointPercentStat.text(JSON.stringify(foundPlayerData.three_point_percentage).replace(/['"]+/g, ''));
        var freeThrowsPercentStat = $('<td>');
        freeThrowsPercentStat.text(JSON.stringify(foundPlayerData.free_throw_percentage).replace(/['"]+/g, ''));
        var offesensiveReboundsStat = $('<td>');
        offesensiveReboundsStat.text(JSON.stringify(foundPlayerData.offensive_rebounds_per_game).replace(/['"]+/g, ''));
        var defensiveReboundsStat = $('<td>');
        defensiveReboundsStat.text(JSON.stringify(foundPlayerData.defensive_rebounds_per_game).replace(/['"]+/g, ''));
        var reboundsStat = $('<td>');
        reboundsStat.text(JSON.stringify(foundPlayerData.rebounds_per_game).replace(/['"]+/g, ''));
        var assistsStat = $('<td>');
        assistsStat.text(JSON.stringify(foundPlayerData.assists_per_game).replace(/['"]+/g, ''));
        var stealsStat = $('<td>');
        stealsStat.text(JSON.stringify(foundPlayerData.steals_per_game).replace(/['"]+/g, ''));
        var blocksStat = $('<td>');
        blocksStat.text(JSON.stringify(foundPlayerData.blocks_per_game).replace(/['"]+/g, ''));
        var turnoversStat = $('<td>');
        turnoversStat.text(JSON.stringify(foundPlayerData.turnovers_per_game).replace(/['"]+/g, ''));
        var playerEfficiencyStat = $('<td>');
        playerEfficiencyStat.text(JSON.stringify(foundPlayerData.player_efficiency_rating).replace(/['"]+/g, ''));
        var pointsStat = $('<td>');
        pointsStat.addClass('finalEntry');
        pointsStat.text(JSON.stringify(foundPlayerData.points_per_game).replace(/['"]+/g, ''));

        tableStats.append(gamesPlayedStat, minutesPlayedStat, fieldGoalsMadeStat, fieldGoalsAttemptedStat, fieldGoalsPercentStat, threePointMadeStat, threePointAttemptedStat, threePointPercentStat, freeThrowsPercentStat, offesensiveReboundsStat, defensiveReboundsStat, reboundsStat, assistsStat, stealsStat, blocksStat, turnoversStat, playerEfficiencyStat, pointsStat);

        tableBody.append(tableStats);

        table.append(tableBody);


        //APPEND PLAYERCARD DATA TO RIGHTCOLUMN DIV
        rightColumn.append(playerCardName);
        rightColumn.append(playerCardTeam);
        rightColumn.append(table);
        $('#statColumn').append(rightColumn);


        var playerName = name;

        console.log(name);

        var splitPlayerName = playerName.split(' ');
        
        var firstName = splitPlayerName[0];
        var lastName = splitPlayerName[1];
        console.log(firstName);
        console.log(lastName);

        var firstNamea = '/' + firstName;
        var lastNamea = '/' + lastName;
        console.log(firstNamea);
        console.log(lastNamea);

        var completeName = lastNamea + firstNamea;
        console.log(completeName);

        //let playerImage = $(`#playerImage`);
        //playerCardImage.attr('src', 'https://nba-players.herokuapp.com/players' + completeName);
        //playerImage.appendTo('#player-images');

        //ADD BUTTONS TO REMOVE ADDED PLAYERS
        var addButton = $("<button>");
        addButton.addClass(`${newName}`);
        addButton.addClass("btn");
        addButton.addClass('btn-light');
        addButton.attr('href', '#');
        addButton.text('X ' + playerName);
        $("#buttonArea").append(addButton);
      
      
        addButton.on('click', function(){ $('.' + newName).remove(); });

        //PLAYER IMAGE DOM
        var playerCardImage = $('<img>');
        playerCardImage.addClass('playerImage');
        playerCardImage.addClass('rounded');
        playerCardImage.attr('src', 'https://nba-players.herokuapp.com/players' + completeName);
        leftColumn.append(playerCardImage);
        $('#imageColumn').append(leftColumn);
        console.log(leftColumn);

        if (!foundPlayerData) {
            console.log('The player you searched for is not here');
            return false; 
        };

        // playerView will be equal to our table div
        let playerView = $("#player-view");
        // This appends our playerView with a new div that's equal to the searched name and populates it 
        // with the array's data
        
        //ADD .newName CLASS TO PARENT DIVS SO THEY CAN BE DELETED LATER
        rightColumn.addClass(newName);
        leftColumn.addClass(newName);
        
        
       console.log("newName if/else fail")
        //UPDATE CHART
        var chartBox = $("<div id=chartBox></div>");
        chartBox.addClass(`${newName}`);
        $("#chartContainer").append(chartBox);


                chart = new CanvasJS.Chart("chartBox", {
                animationEnabled: true,
                dataPointWidthMax: 20,
                dataPointWidthMin: 5,
                labelWrap: true,
        
                title: {
                    text: "",
                    fontFamily: "arial black",
                    fontColor: "#695A42"
                },
                axisX: {
                    labelWrap: true,
                    labelAutoFit: true,
                },
                axisY: {
                },
                toolTip: {
                    shared: true,
                    content: "{id}<br/>{name}: <strong>{y}</strong>"
                },
                data: [{
                    class: newName,
                    type: "stackedColumn",
                    showInLegend: true,
                    color: "#696661",
                    name: foundPlayerData.name,
                    dataPoints: [
                     


                        { y: parseInt(foundPlayerData.games_played), label: 'GP', id:"Games Played" },
                        { y: parseInt(foundPlayerData.minutes_per_game), label: 'MIN', id:"Minutes"  },
                        { y: parseInt(foundPlayerData.field_goals_made_per_game), label: 'FGM', id:"Field Goals Made"  },
                        { y: parseInt(foundPlayerData.field_goals_attempted_per_game), label: 'FGA', id:"Field Goals Attempted" },
                        { y: parseInt(foundPlayerData.field_goal_percentage), label: 'FGPCT', id:"Field Goal Percentage" },
                        { y: parseInt(foundPlayerData.three_point_made_per_game), label: 'FG3M', id:'3Pt Field Goal Made' },
                        { y: parseInt(foundPlayerData.free_throw_percentage), label: 'FT%', id:'Free Throw Percentage' },
                        { y: parseInt(foundPlayerData.points_per_game), label: 'PPG', id:"Points Per Game" },
                        { y: parseInt(foundPlayerData.offensive_rebounds_per_game), label: 'OREB', id: "Offensive Rebounds Per Game"},
                        { y: parseInt(foundPlayerData.defensive_rebounds_per_game), label: 'DREB', id: "Defensive Rebounds Per Game" },
                        { y: parseInt(foundPlayerData.rebounds_per_game), label: 'REB', id:"Rebounds Per Game" },
                        { y: parseInt(foundPlayerData.assists_per_game), label: 'AST', id:"Assists" },
                        { y: parseInt(foundPlayerData.steals_per_game), label: 'STL', id:"Steals" },
                        { y: parseInt(foundPlayerData.blocks_per_game), label: 'BLK', id:"Blocks" },
                        { y: parseInt(foundPlayerData.turnovers_per_game), label: 'TO', id:"TurnOvers" },
                        { y: parseInt(foundPlayerData.player_efficiency_rating), label: 'PER', id:"PLayer Effeciancy Rating" },
        
                    ]
                },
                
                
                ]
            });
            chart.render();
            
        }


           // News section function
           var newsBox = $(`<div class=${newName}></div>`);
           var newsUrl = 'https://newsapi.org/v2/everything?' +
               'q=' + newName + '&' + 'pageSize=5&' +
               'sortBy=popularity&' +
               'apiKey=04246e4aed574328b298927d89b9985a';
     
           $.ajax({
               url: newsUrl,
               method: "GET"
               }).done(function(response) {
               console.log('this is the repsonse');
               console.log(response);
               newsBox.html('');
                   $.each(response.articles, function(index, element) {
                       var date = new Date(element.publishedAt).toISOString().slice(0,10);
                       var author = element.author ? element.author : ' ';
                       var li = '<li><h3><a href="'+element.url+'" target="_blank">'+element.title+'</a></h3><span class="date">'+date+'</span><span class="author">'+author+'</span><p>'+element.description+'</p><img src="'+element.urlToImage+'" /></li>'
                       newsBox.append(li);
                       $('#news-section').append(newsBox);
                   });
                });
            });
    });