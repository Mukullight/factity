import reflex as rx 

from ..ui.base import base_page

# @rx.page(route='/about')
def about_page() -> rx.Component:
    my_child = rx.vstack(
rx.vstack(
        # Header section
        rx.box(
            rx.heading("About Our Company", size="9", mb="4", align="center",padding="0.5em"),
            rx.divider(padding="0.25em",color_scheme="tomato"),
            rx.heading("A place for clarity 😊 or is it ? 🤨 ",variant="solid",text_color="white",size="8",padding_top="0.25em",padding_bottom="1em"),
            width="100%",
            text_align="center",
            py="10",
            padding="0.25em",
        ),
        
        # Mission and Vision section
        rx.vstack(
            rx.hstack(
            rx.box(
                rx.heading("Our Mission", size="7"),
                rx.text(
                    """The initial purpose of the project is to expedite the process of post-production, which is often tedious and time-consuming. It is often the case that while recording audio, it is particularly hard to diarize speaker voices. To put it more simply, it is quite hard to determine who said what. The internet is written in ink; once posted, content is out there forever, even if we delete the post, it is still somewhere out there, buried deep in the labyrinth of internet links. To solve this problem, we thought of a solution to fact-check content before we post it, and we also solve the problem of transcript generation from YouTube links. Although it is quite a hard task in terms of processing and generating accurate transcripts and fact checking them automatically without manual intervention, we are hopeful that AI R&D and the more capable models are going to be deployed into production and benchmark standards are going to get better with each newly deployed model. In the initial versions we are going to use the agents for the purposes of browsing and fact checking.Although the project is in the initial stages of its conception, We are confident that we would revisit the project to upgrade and roll out new features as time passes. As all things AI we are limited by our hardware compatibility and scaling the project would be a challenging task going forward. Well hope is what drives us forward so let's hope for the best.
                    """,size="4"
                ),
                p="6",
                flex="1",
            ),
        ),
        
        # Team section

        rx.divider(padding="1em",color_scheme="tomato"),
        # Contact section
        rx.box(
        rx.vstack(
            rx.heading("Our Team", size="9", mb="6"),
            rx.image(src="/fucku.png",name="Mukul Namagiri",width="40%",height="40%",align="center"),
            rx.vstack(
                rx.box(
                    rx.heading("Mukul Namagiri", size="5"),
                    rx.text("👍 good"),
                    p="4",
                    align="centre",
                ),
                spacing="8",
                align="center",
                padding_top="1em",
            ),
            align="center",
        ),
            rx.heading("Contact Information", size="9", mb="4"),
            rx.text("Email: mukulnamagiri1@gmail.com "),
            rx.text("Phone: +44 7587827005"),
            text_align="center",
            py="10",
            align="center",
        ),
        
        spacing="1",
        max_width="1200px",
        margin="0 auto",
        p="4",
        align="center",
    ),
            id='my-child',
            #background="center/cover url('/bgimage.jpeg')",
            width="100%",
            height="100%",
        ),

        )
    return base_page(my_child)




