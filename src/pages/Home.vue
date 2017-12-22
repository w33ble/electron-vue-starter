<template>
  <div>
    <h1>Home</h1>
    <p>{{message}}</p>
    <hr />
    <h1>Home</h1>
    <h2>Home</h2>
    <h3>Home</h3>
    <h4>Home</h4>
    <h5>Home</h5>
    <h6>Home</h6>
    <p>{{message}}</p>
    <div>
      <form>
        <fieldset>
          <legend>Inputs</legend>
          <div>
            <label>Text</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Submit</label>
            <input type="submit" value="Submit Button" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Textarea</legend>
          <div>
            <textarea rows="20" cols="5"></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Select</legend>
          <div>
            <label>Select One</label>
            <select name="number">
              <option disabled>Choose...</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div>
            <label>Select Mulitple</label>
            <select multiple name="number2">
              <option disabled>Choose...</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      message: {
        type: String,
        default: 'No Message :(',
      },
    },
  };
</script>
