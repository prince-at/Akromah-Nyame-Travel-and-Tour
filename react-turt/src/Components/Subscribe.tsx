 const Subscribe = () => {



  return (
    <div className="subscribe-container">
      {/* <h2 className='subcription-text'>Subscribe to our Newsletter to get Travel updates and details</h2> */}
      <form
        action="https://gmail.us22.list-manage.com/subscribe/post?u=b7bc51dab3b19749af4bb358c&amp;id=55a8b34a51&amp;f_id=00b7c2e1f0"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        method="post"
        target="_blank"
        rel="noopener noreferrer"
      >
        <input
          className="email"
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          color="black"
          required
        />
        <button type="submit" className="sumbit-button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
 