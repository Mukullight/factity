import reflex as rx 


def footer_item(text: str, href: str) -> rx.Component:
    return rx.link(rx.text(text, size="4"), href=href)


def footer_items_1() -> rx.Component:
    return rx.flex(
        rx.heading(
            "PRODUCTS", size="4", weight="bold", as_="h3"
        ),
        footer_item("AI agents", "https://www.langchain.com"),
        footer_item("Colab link", "https://colab.research.google.com/drive/1H3FQgQ_CpjXe1Vg1L_eQjzKlFdQ2qFzi?usp=sharing"),
        footer_item("Blog post", "https://txt.fyi/89d40f333dbf83f1"),
        footer_item("Github", "https://github.com/Mukullight"),
        spacing="4",
        text_align=["center", "center", "start"],
        flex_direction="column",
    )





def social_link(icon: str, href: str) -> rx.Component:
    return rx.link(rx.icon(icon), href=href)


def socials() -> rx.Component:
    return rx.flex(
        social_link("instagram", "https://www.instagram.com/mukul_namagiri/"),
        social_link("X", "https://x.com/MNamagiri66052"),
        social_link("linkedin", "https://www.linkedin.com/in/mukul-namagiri-434427190/"),
        spacing="3",
        justify_content=["center", "center", "end"],
        width="100%",
    )


def footer_newsletter() -> rx.Component:
    return rx.el.footer(
        rx.vstack(
            rx.flex(
                footer_items_1(),
                rx.vstack(
                    rx.text(
                        "Share your email to get the latest developments",
                        size="4",
                        weight="bold",
                    ),
                    rx.hstack(
                        rx.input(
                            placeholder="Your email address",
                            type="email",
                            size="3",
                        ),
                        rx.icon_button(
                            rx.icon(
                                "arrow-right",
                                padding="0.15em",
                            ),
                            size="3",
                        ),
                        spacing="1",
                        justify="center",
                        width="100%",
                    ),
                    align_items=[
                        "center",
                        "center",
                        "start",
                    ],
                    justify="center",
                    height="100%",
                ),
                justify="between",
                spacing="6",
                flex_direction=["column", "column", "row"],
                width="100%",
            ),
            rx.divider(),
            rx.flex(
                rx.hstack(
                    rx.image(
                        src="/Fact-ity.png",
                        width="2em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.text(
                        "© 🐶 inc ",
                        size="3",
                        white_space="nowrap",
                        weight="medium",
                    ),
                    spacing="2",
                    align="center",
                    justify_content=[
                        "center",
                        "center",
                        "start",
                    ],
                    width="100%",
                ),
                socials(),
                spacing="4",
                flex_direction=["column", "column", "row"],
                width="100%",
            ),
            spacing="5",
            width="100%",
        ),
        width="100%",
        padding="4em",
    )