import React, { createContext, useMemo, useState, useContext, ReactNode } from "react";
import "./select-styles.css";

type MenuIds = "first" | "second" | "last";
type Menu = { id: MenuIds; title: string };

type SelectedMenu = {
  id: MenuIds;
};

type MenuSelected = {
  selectedMenu: SelectedMenu;
}

type MenuAction = {
  onSelectedMenu: (menu: SelectedMenu) => void;
};

type PropsProvider = {
  children: ReactNode; // Add type
};
type PropsMenu = {
  menus: Menu[];
};

const MenuSelectedContext = createContext<MenuSelected>({
  selectedMenu: {id: "first"},
});

const MenuActionContext = createContext<MenuAction>({
  onSelectedMenu: () => {},
});


function MenuProvider({ children }: PropsProvider) {
  // Додати тип для SelectedMenu він повинен містити { id }
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>({id: "first"});

  const menuContextAction = useMemo(
    () => ({
      onSelectedMenu: setSelectedMenu,
    }),
    []
  );

  const menuContextSelected = useMemo(
    () => ({
      selectedMenu,
    }),
    [selectedMenu]
  );

  return (
    <MenuActionContext.Provider value={menuContextAction}>
      <MenuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </MenuSelectedContext.Provider>
    </MenuActionContext.Provider>
  );
}


function MenuComponent({ menus }: PropsMenu) {
  const { onSelectedMenu } = useContext(MenuActionContext);
  const { selectedMenu } = useContext(MenuSelectedContext);

  return (
    <>
      {menus.map((menu) => (
        <div key={menu.id} onClick={() => onSelectedMenu({ id: menu.id })} className={`select  ${selectedMenu.id === menu.id ? "selected" : ""}`}>
          <span className="select-title">{menu.title}</span>
          {selectedMenu.id === menu.id ? "Selected" : "Not selected"}
        </div>
      ))}
    </>
  );
}

export function ComponentApp() {
  const menus: Menu[] = [
    {
      id: "first",
      title: "1",
    },
    {
      id: "second",
      title: "2",
    },
    {
      id: "last",
      title: "3",
    },
  ];

  return (
    <MenuProvider>
      <MenuComponent menus={menus} />
    </MenuProvider>
  );
}
