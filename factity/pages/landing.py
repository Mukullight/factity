import reflex as rx
from .. import navigation


def landing_component() -> rx.Component:
    text = "FACT-ITY an open source tool that allows content creators to leverage the power of AI agents to check for the factual correctness helping reduce the time in post production"
    text1 = "Stressed about the content you generate"
    text2 = "Feeling stressed about the accuracy of your content? Don't worry—FACT-ITY is here to assist you. FACT-ITY empowers you to verify the facts within your content, ensuring accuracy and helping you to correct any errors that might be present."
    return rx.vstack(
        rx.vstack(
            rx.desktop_only(
                rx.hstack(
                    rx.hstack(
                        rx.image(
                            src="/Fact-ity.png",
                            width="90%",
                            height="90%",
                            align="right",
                            border_radius="15%",
                            border_color="white",
                            padding="5em",
                        ),
                        rx.box(
                            rx.text(
                                text,
                                size="8",
                                weight="bold",
                                padding="4em",
                                padding_right="3em",
                                color=rx.color_mode_cond(light="white", dark="white")
                            )
                        ),
                    ),
                    padding="2em",
                ),
                rx.divider(),
                rx.hstack(
                    rx.vstack(
                        rx.box(
                            rx.text(
                                text1,
                                size="9",
                                weight="bold",
                                padding="4em",
                                padding_top="0em",
                                padding_bottom="1em",
                                color=rx.color_mode_cond(light="tomato", dark="tomato"),
                                text_align="center",
                            ),
                            align="center",
                        ),
                        rx.hstack(
                            rx.image(
                                src="/stressed_person.png",
                                width="40%",
                                height="40%",
                                align="right",
                                border_radius="15%",
                                border_color="white",
                                padding="5em",
                            ),
                            rx.text(
                                text2,
                                size="8",
                                weight="bold",
                                padding="4em",
                                padding_right="3em",
                                color=rx.color_mode_cond(light="white", dark="white")
                            ),
                        ),
                    ),
                    padding="2em",
                ),
                rx.vstack(
                    rx.box(
                        rx.text(
                            "PROBLEM SOLVED",
                            size="9",
                            weight="bold",
                            color=rx.color_mode_cond(light="tomato", dark="tomato"),
                            text_align="center",
                        ),
                        align="center"
                    ),
                    rx.hstack(
                        rx.image(
                            src="/dude_checking.png",
                            width="40%",
                            height="40%",
                            align="right",
                            border_radius="15%",
                            border_color="white",
                            padding="3em",
                        ),
                        rx.image(
                            src="/dude_happy.png",
                            width="40%",
                            height="40%",
                            border_radius="15%",
                            border_color="white",
                            padding="3em",
                            align="right",
                        ),
                    ),
                    align="center"
                ),
                rx.divider(),
            ),
            rx.tablet_only(
                rx.hstack(
                    rx.vstack(
                        rx.image(
                            src="/Fact-ity.png",
                            width="90%",
                            height="90%",
                            align="right",
                            border_radius="15%",
                            border_color="white",
                            padding="3em",
                        ),
                        rx.box(
                            rx.text(
                                text,
                                size="8",
                                weight="bold",
                                padding="4em",
                                padding_right="3em",
                                color=rx.color_mode_cond(light="white", dark="white")
                            )
                        ),
                    ),
                    padding="2em",
                ),
                rx.divider(),
                rx.hstack(
                    rx.vstack(
                        rx.box(
                            rx.text(
                                text1,
                                size="9",
                                weight="bold",
                                padding="4em",
                                padding_top="0em",
                                padding_bottom="1em",
                                color=rx.color_mode_cond(light="tomato", dark="tomato"),
                                text_align="center",
                            ),
                            align="center",
                        ),
                        rx.hstack(
                            rx.image(
                                src="/stressed_person.png",
                                width="60%",
                                height="60%",
                                align="right",
                                border_radius="15%",
                                border_color="white",
                                padding="2em",
                            ),
                            rx.text(
                                text2,
                                size="6",
                                weight="bold",
                                padding="4em",
                                padding_right="3em",
                                color=rx.color_mode_cond(light="white", dark="white")
                            ),
                        ),
                    ),
                    padding="2em",
                ),
                rx.vstack(
                    rx.box(
                        rx.text(
                            "PROBLEM SOLVED",
                            size="9",
                            weight="bold",
                            color=rx.color_mode_cond(light="tomato", dark="tomato"),
                            text_align="center",
                        ),
                        align="center"
                    ),
                    rx.hstack(
                        rx.image(
                            src="/dude_checking.png",
                            width="40%",
                            height="40%",
                            align="right",
                            border_radius="15%",
                            border_color="white",
                            padding="3em",
                        ),
                        rx.image(
                            src="/dude_happy.png",
                            width="40%",
                            height="40%",
                            border_radius="15%",
                            border_color="white",
                            padding="3em",
                            align="right",
                        ),
                    ),
                    align="center"
                ),
                rx.divider(),
            ),
rx.mobile_only(
    rx.vstack(
        rx.vstack(
            rx.image(
                src="/Fact-ity.png",
                width="30%",
                height="30%",
                align="center",
            ),
                rx.text(
                    text,
                    size="6",  # Reduced size for mobile
                    weight="bold",
                    padding="2em",  # Reduced padding
                    color=rx.color_mode_cond(light="white", dark="white")
                )
        ),
        padding_top = "0em",
    )
),

            background="center/cover url('/background.jpg')",
            width="100%",
            height="100%",
        )
    )