import React from "react";

const HomePointsTable = () => {
  return (
    <div className="col-lg-12">
      <div className="widget-next-match">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Branch</th>

              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <strong className="text-white">
                  Computer Science And Engineering
                </strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <strong className="text-white">
                  Electronics and Communication Engineering
                </strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <strong className="text-white">Electrical Engineering</strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <strong className="text-white">Civil Engineering</strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <strong className="text-white">Mechanical Engineering</strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <strong className="text-white">
                  Metallurgical and Materials Engineering
                </strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <strong className="text-white">
                  Production and Industrial Engineering + Engineering and
                  Computational Mechanics
                </strong>
              </td>

              <td>140</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <strong className="text-white">M. Tech + M.SC + MCA</strong>
              </td>

              <td>140</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePointsTable;
