export default function heading() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(images/bg_3.jpg)`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-lg-5 mx-auto text-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100vh",
              }}
            >
              <h1 class="text-black">Matches</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, molestias repudiandae pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
