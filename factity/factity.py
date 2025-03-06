"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
import reflex_local_auth

from rxconfig import config
from .ui.base import base_page

from .auth.pages import (
    my_login_page,
    my_register_page,
    my_logout_page
)
from .auth.state import SessionState



from . import  contact, navigation, pages

def index() -> rx.Component:
    return base_page(
        rx.cond(SessionState.is_authenticated,
            pages.dashboard_component(),
            pages.landing_component(),
        )
    )

app = rx.App(
    theme=rx.theme(
        appearance="dark",
        has_background=True,
        panel_background="solid",
        scaling="90%",
        radius="medium",
        accent_color="red",
        gray_color="mauve"  # You can add a secondary color
    ),
    style={
        # Global styles
        "::selection": {
            "background_color": "red",  # Matches your accent color
        },
        # Hide mobile theme toggle if needed
        ".rx-switch-mobile": {
            "display": "none"
        }
    }
)
app.add_page(index)
# reflex_local_auth pages
app.add_page(
    my_login_page,
    route=reflex_local_auth.routes.LOGIN_ROUTE,
    title="Login",
)
app.add_page(
    my_register_page,
    route=reflex_local_auth.routes.REGISTER_ROUTE,
    title="Register",
)

app.add_page(
    my_logout_page,
    route=navigation.routes.LOGOUT_ROUTE,
    title="Logout",
)

# my pages
app.add_page(pages.about_page, 
             route=navigation.routes.ABOUT_US_ROUTE)

app.add_page(
    pages.protected_page, 
    route="/protected/",
    on_load=SessionState.on_load
)
#app.add_page(pages.articles_page, 
 #            route=navigation.routes.ARTICLE_LIST_ROUTE)

app.add_page(contact.contact_page, 
             route=navigation.routes.CONTACT_US_ROUTE)
app.add_page(
    contact.contact_entries_list_page, 
    route=navigation.routes.CONTACT_ENTRIES_ROUTE,
    on_load=contact.ContactState.list_entries
)

