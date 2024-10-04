function Bookingpage(){
    return(
        <>
        <div class="bookNow">
        <h1>Book now</h1>
        </div>
        <div class ="divider"></div>
        <form>
            <h4>How Many Diners</h4>
            <label for="onediners">1</label>
            <input type="radio" id="onediners"></input>
            <label for="twodiners">2</label>
            <input type="radio" id="twodiners"></input>
            <label for="threediners">3</label>
            <input type="radio" id="threediners"></input>
            <label for="fourdiners">4</label>
            <input type="radio" id="fourdiners"></input>
            <label for="fivediners">5</label>
            <input type="radio" id="fivediners"></input>
            <label for="morediners">6+</label>
            <input type="radio" id="morediners"></input>
        </form>
        <br/>
        <form>
            <label for="radio" id="indoorSeating">Indoors</label>
            <input type="radio" id="indoorSeating"></input>
            <label for="radio" id="outdoorSeating">Outdoors</label>
            <input type="radio" id="outdoorSeating"></input>
        </form>
        <br/>
        <form>
            <label for="time" >Time</label>
            <input type="time" id="time" class="textblock"></input><br/>
            <br/>
            <label for="date" >Date</label>
            <input type="date" id="date" class="textblock"></input><br/>
            <br/>
            <label for="fname" >First Name</label>
            <input type="text" id="fname" class="textblock"></input><br/>
            <br/>
            <label for="lname" >Last Name</label>
            <input type="text" id="lname" class="textblock"></input><br/>
            <br/>
            <label for="email">Email</label>
            <input type="email" id="email" class="textblock"></input><br/>
            <br/>
            <label for="notes">Notes</label><br/>
            <textarea type="textarea" id="notes" rows="5" cols="33" class="textblock"></textarea><br/>
        </form>
        </>
    )
}

export default Bookingpage;