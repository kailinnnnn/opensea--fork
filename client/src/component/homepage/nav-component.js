import React, { useState } from "react";

const NavComponent = () => {
  const [selected, setSelected] = useState("All"); // 状态变量selected用来保存当前选中的li

  const handleClick = (item) => {
    setSelected(item); // 更新状态变量selected
  };

  return (
    <nav>
      <ul>
        <li
          className={selected === "All" ? "selected" : ""}
          onClick={() => handleClick("All")}
        >
          All
        </li>
        <li
          className={selected === "Art" ? "selected" : ""}
          onClick={() => handleClick("Art")}
        >
          Art
        </li>
        <li
          className={selected === "Gaming" ? "selected" : ""}
          onClick={() => handleClick("Gaming")}
        >
          Gaming
        </li>
        <li
          className={selected === "Memberships" ? "selected" : ""}
          onClick={() => handleClick("Memberships")}
        >
          Memberships
        </li>
        <li
          className={selected === "PFPs" ? "selected" : ""}
          onClick={() => handleClick("PFPs")}
        >
          PFPs
        </li>
        <li
          className={selected === "Photograhpy" ? "selected" : ""}
          onClick={() => handleClick("Photograhpy")}
        >
          Photograhpy
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
