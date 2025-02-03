import React from "react";
import BurgerMenu from "./BurgerMenu";

export default {
  title: "Components/BurgerMenu",
  component: BurgerMenu,
};

const Template = (args) => <BurgerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};