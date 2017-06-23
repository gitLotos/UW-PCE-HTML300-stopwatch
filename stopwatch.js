    // turns the time into a human readable format
    function formatTime (raw) {
      let seconds = Math.floor(raw / 1000)
      let fractionalSeconds = (raw % 1000) / 1000
      let minutes = Math.floor(seconds / 60)
      seconds = seconds - (60 * minutes) + fractionalSeconds

      return `${zeroPad(minutes)}:${zeroPad(seconds.toFixed(2))}`
    }

    // adds a leading zero because humans like them
    function zeroPad (value) {
      let pad = value < 10 ? '0' : ''
      return `${pad}${value}`
    }

    var Interval;
    var clock = 0;
    var mylist = document.getElementById("lapList");
    var laps = [];
    
    function StartTime(){
            clearInterval(Interval);
            Interval = setInterval(Clock, 10);
    }

    function Clock(){
        clock = clock + 10;
        document.getElementById("stopwatchTime").innerHTML = formatTime(clock);
    }

    function StopTime(){

                clearInterval(Interval);
                document.getElementById("stopwatchTime").innerHTML = formatTime(clock);
    }

    function ResetTime(){
        clock = 0;
        document.getElementById("stopwatchTime").innerHTML = formatTime(clock);
        mylist.innerHTML = "";
        laps = [];
    }

   function LapTime(){
       laps.push(clock);
       mylist.innerHTML = "";
       
        for (let i = 0, length = laps.length; i < length; i++)
        {
            let time = document.createElement("li");
            time.innerHTML = formatTime(laps[i]);
            mylist.appendChild(time);
        }
    }
