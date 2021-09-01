try {
    // const response = await login(userFormData);

    // if (!response.ok) {
    //   throw new Error("something went wrong!");
    // }

    // const { token, user } = await response.json();
    const { data } = await login({
      variables: {
        ...userFormData
      }
    })

    console.log(data);
    Auth.login(data.login.token);
  } catch (err) {
    console.error(err);
    setShowAlert(true);
  }