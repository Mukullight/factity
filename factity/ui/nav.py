import reflex as rx
import reflex_local_auth


from .. import navigation

def navbar_link(text: str, url: str) -> rx.Component:
    return rx.link(
            rx.text(
                text,
               size="4", 
               weight="medium",
               color=rx.color_mode_cond(light="black", dark="white"),), href=url
    )


def navbar() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.link(
                        rx.image(
                            src="/Fact-ity.png",
                            width="2.25em",
                            height="auto",
                            border_radius="25%",
                        ),
                        href=navigation.routes.HOME_ROUTE
                    ),
                    rx.link(
                        rx.heading(
                            "FACT-ITY", size="7", weight="bold"
                        ),
                        href=navigation.routes.HOME_ROUTE
                    ),
                    align_items="center",
                ),
                rx.hstack(
                    navbar_link("Home", navigation.routes.HOME_ROUTE),
                    navbar_link("About", navigation.routes.ABOUT_US_ROUTE),
                    navbar_link("Usage guide", navigation.routes.ARTICLE_LIST_ROUTE),
                    navbar_link("Contact", navigation.routes.CONTACT_US_ROUTE),
                    spacing="5",
                ),
                rx.hstack(
                    rx.link(
                        rx.button(
                            "Register",
                            size="3",
                            variant="outline",
                        ),
                        href=reflex_local_auth.routes.REGISTER_ROUTE
                    ),
                    rx.link(
                        rx.button(
                            "Login",
                            size="3",
                            variant="outline",
                        ),
                        href=reflex_local_auth.routes.LOGIN_ROUTE
                    ),
                    spacing="4",
                    justify="end",
                ),
                justify="between",
                align_items="center",
                id='my-navbar-hstack-desktop',
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/Fact-ity.png",
                        width="2em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(
                        "FACT-ITY", size="6", weight="bold"
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Home", 
                            on_click=navigation.NavState.to_home),
                        rx.menu.item("About", 
                            on_click=navigation.NavState.to_about_us),
                        rx.menu.item("usage guide", 
                            on_click=navigation.NavState.to_articles),
                        rx.menu.item("Contact", 
                            on_click=navigation.NavState.to_contact),
                        rx.menu.separator(),
                        rx.menu.item("Log in", 
                            on_click=navigation.NavState.to_login),
                        rx.menu.item("Register", 
                            on_click=navigation.NavState.to_register),
                    ),
                    justify="end",
                ),
                justify="between",
                align_items="center",
            ),
        ),
        rx.mobile_only(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/Fact-ity.png",
                        width="2em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(
                        "FACT-ITY", size="6", weight="bold"
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        rx.menu.item("Home", 
                            on_click=navigation.NavState.to_home),
                        rx.menu.item("About", 
                            on_click=navigation.NavState.to_about_us),
                        rx.menu.item("usage guide", 
                            on_click=navigation.NavState.to_articles),
                        rx.menu.item("Contact", 
                            on_click=navigation.NavState.to_contact),
                        rx.menu.separator(),
                        rx.menu.item("Log in", 
                            on_click=navigation.NavState.to_login),
                        rx.menu.item("Register", 
                            on_click=navigation.NavState.to_register),
                    ),
                    justify="end",
                ),
                justify="between",
                align_items="center",
            ),
        ),


        bg=rx.color_mode_cond(
        light=rx.color("tomato", 5, alpha=False),
        dark=rx.color("tomato", 5, alpha=False)),
        padding="1em",
        # position="fixed",
        # top="0px",
        # z_index="5",
        width="100%",
        id='my-main-nav',
    )

