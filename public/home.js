function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  React.useEffect(() => {
    const navCreateAccount = document.getElementById('nav-create-account');
    const navLogin = document.getElementById('nav-login');
    const navDeposit = document.getElementById('nav-deposit');
    const navWithdraw = document.getElementById('nav-withdraw');
    const navBalance = document.getElementById('nav-balance');
    const navAllData = document.getElementById('nav-allData');
    const navLogout = document.getElementById('nav-logout');

    navCreateAccount.style.display = "block";
    navLogin.style.display = "block";
    navDeposit.style.display = "none";
    navWithdraw.style.display = "none";
    navBalance.style.display = "none";
    navAllData.style.display = "none";
    navLogout.style.display = "none";
    },[])
 

  return (
    <>
    
    <Card
      txtcolor="black"
      bgcolor="info"
      header="Bad Bank Home Page"
      title="Welcome to Burdick's Bad Bank"
      text="Use this bank at your own risk!"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
    </>
  );
}
