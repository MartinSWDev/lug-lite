const Hero = ({ heading, message }) => {
  return (
    <div>
      <div>
        <h2>{heading}</h2>
        <p>{message}</p>
        <form method="post" action="/api/addKey">
          <label htmlFor="origin">Enter Origin</label>
          <input id="origin" name="origin" placeholder="MAN"></input>
          <label htmlFor="destination">Enter Destination</label>
          <input id="destination" name="destination" placeholder="LIG"></input>
          <label htmlFor="flight">Enter Flight Number</label>
          <input id="flight" name="flight" placeholder="FR38"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
