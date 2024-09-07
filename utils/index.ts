
export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
  // Update the class name of the clicked link
  const links = document.querySelectorAll(".navigation-link");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  // if "get in touch" link is clicked mark contact as active
  if (e.currentTarget.hash === "#contact") {
    links[links.length - 1].classList.add("active");
  }
  e.currentTarget.classList.add("active");
};
