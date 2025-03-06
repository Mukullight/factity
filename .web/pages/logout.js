/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { AlignJustifyIcon as LucideAlignJustifyIcon, ArrowRightIcon as LucideArrowRightIcon, BotIcon as LucideBotIcon, InstagramIcon as LucideInstagramIcon, LayoutDashboardIcon as LucideLayoutDashboardIcon, LinkedinIcon as LucideLinkedinIcon, LogOutIcon as LucideLogOutIcon, MenuIcon as LucideMenuIcon, MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon, TextIcon as LucideTextIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextLink from "next/link"
import { Drawer as VaulDrawer } from "vaul"
import theme from "$/utils/theme.js"
import NextHead from "next/head"



export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_699c3c317c8e1819c2e018b7276e730b () {
  
  const reflex___state____state__reflex_local_auth___local_auth____local_auth_state = useContext(StateContexts.reflex___state____state__reflex_local_auth___local_auth____local_auth_state)
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const { resolvedColorMode } = useContext(ColorModeContext)
  const reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state = useContext(StateContexts.reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state)
  const ref_my_content_area_el = useRef(null); refs["ref_my_content_area_el"] = ref_my_content_area_el;
  const ref_my_child = useRef(null); refs["ref_my_child"] = ref_my_child;
  const ref_my_main_nav = useRef(null); refs["ref_my_main_nav"] = ref_my_main_nav;
  const ref_my_navbar_hstack_desktop = useRef(null); refs["ref_my_navbar_hstack_desktop"] = ref_my_navbar_hstack_desktop;





  
  return (
    <Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state.is_authenticated) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "1.5em", ["paddingBottom"] : "1.5em", ["background"] : "var(--accent-3)", ["height"] : "100vh", ["width"] : "16em" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<img css={({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Fact-ity.png"}/>
<RadixThemesHeading weight={"bold"}>

{"FACTITY"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Dashboard"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/transcription"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideTextIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Tanscript"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/AGENT_ACTION"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideBotIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Agent"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={toggleColorMode}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
<RadixThemesText as={"p"} size={"4"}>

{((resolvedColorMode === "light") ? "Turn dark mode on" : "Turn light mode on")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_logout", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLogOutIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Logout"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_user_info) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<RadixThemesIconButton css={({ ["padding"] : "6px" })} radius={"full"} size={"3"}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesText as={"p"} size={"3"} weight={"bold"}>

{(isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_username) ? reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_username : "Account")}
</RadixThemesText>
<RadixThemesText as={"p"} size={"2"} weight={"medium"}>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_user_info?.["email"]}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

{""}
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<VaulDrawer.Root direction={"left"}>

<VaulDrawer.Trigger asChild={true}>

<LucideAlignJustifyIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</VaulDrawer.Trigger>
<VaulDrawer.Overlay css={({ ["position"] : "fixed", ["left"] : "0", ["right"] : "0", ["bottom"] : "0", ["top"] : "0", ["z_index"] : 50, ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "5" })}/>
<VaulDrawer.Portal css={({ ["width"] : "100%" })}>

<RadixThemesTheme css={{...theme.styles.global[':root'], ...theme.styles.global.body}}>

<VaulDrawer.Content css={({ ["left"] : "0", ["right"] : "auto", ["bottom"] : "0", ["top"] : "auto", ["position"] : "fixed", ["z_index"] : 50, ["display"] : "flex", ["height"] : "100%", ["width"] : "20em", ["padding"] : "1.5em", ["background"] : "var(--accent-2)" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<VaulDrawer.Close asChild={true}>

<LucideXIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</VaulDrawer.Close>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLayoutDashboardIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Dashboard"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/transcription"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideTextIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Tanscript"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} underline={"none"} weight={"medium"}>

<NextLink href={"/AGENT_ACTION"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideBotIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Agent"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={toggleColorMode}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
<RadixThemesText as={"p"} size={"4"}>

{((resolvedColorMode === "light") ? "Turn dark mode on" : "Turn light mode on")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["as"] : "button", ["underline"] : "none", ["weight"] : "medium", ["width"] : "100%" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_logout", ({  }), ({  })))], args, ({  }))))}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["&:hover"] : ({ ["cursor"] : "pointer", ["background"] : "var(--accent-4)", ["color"] : "var(--accent-11)" }), ["color"] : "var(--accent-11)", ["border-radius"] : "0.5em", ["width"] : "100%", ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["paddingTop"] : "0.75rem", ["paddingBottom"] : "0.75rem" })} direction={"row"} gap={"3"}>

<LucideLogOutIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"} size={"4"}>

{"Logout"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator css={({ ["margin"] : "0" })} size={"4"}/>
<Fragment>

{isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_user_info) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingInlineStart"] : "0.5rem", ["paddingInlineEnd"] : "0.5rem", ["width"] : "100%" })} direction={"row"} justify={"start"} gap={"3"}>

<RadixThemesIconButton css={({ ["padding"] : "6px" })} radius={"full"} size={"3"}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"start"} gap={"0"}>

<RadixThemesBox css={({ ["width"] : "100%" })}>

<RadixThemesText as={"p"} size={"3"} weight={"bold"}>

{(isTrue(reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_username) ? reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_username : "Account")}
</RadixThemesText>
<RadixThemesText as={"p"} size={"2"} weight={"medium"}>

{reflex___state____state__reflex_local_auth___local_auth____local_auth_state__factity___auth___state____session_state.authenticated_user_info?.["email"]}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

{""}
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</VaulDrawer.Content>
</RadixThemesTheme>
</VaulDrawer.Portal>
</VaulDrawer.Root>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["padding"] : "1em", ["width"] : "100%" })} id={"my-content-area-el"} ref={ref_my_content_area_el}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} id={"my-child"} justify={"center"} ref={ref_my_child} gap={"5"}>

<RadixThemesHeading size={"7"}>

{"Are you sure you want logout?"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesButton color={"gray"}>

{"No"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesButton onClick={((...args) => (addEvents([(Event("reflex___state____state.reflex_local_auth___local_auth____local_auth_state.factity___auth___state____session_state.perform_logout", ({  }), ({  })))], args, ({  }))))}>

{"Yes, please logout"}
</RadixThemesButton>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg css={({ ["viewBox"] : "0 0 56 12", ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} height={"12"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesText as={"p"}>

{"lol"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesBox css={({ ["background"] : ((resolvedColorMode === "light") ? "var(--tomato-5)" : "var(--tomato-5)"), ["padding"] : "1em", ["width"] : "100%" })} id={"my-main-nav"} ref={ref_my_main_nav}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} id={"my-navbar-hstack-desktop"} justify={"between"} ref={ref_my_navbar_hstack_desktop} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<img css={({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Fact-ity.png"}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesHeading size={"7"} weight={"bold"}>

{"FACT-ITY"}
</RadixThemesHeading>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : ((resolvedColorMode === "light") ? "black" : "white") })} size={"4"} weight={"medium"}>

{"Home"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/about"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : ((resolvedColorMode === "light") ? "black" : "white") })} size={"4"} weight={"medium"}>

{"About"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/articles"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : ((resolvedColorMode === "light") ? "black" : "white") })} size={"4"} weight={"medium"}>

{"Usage guide"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/contact"} passHref={true}>

<RadixThemesText as={"p"} css={({ ["color"] : ((resolvedColorMode === "light") ? "black" : "white") })} size={"4"} weight={"medium"}>

{"Contact"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"4"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/register"} passHref={true}>

<RadixThemesButton size={"3"} variant={"outline"}>

{"Register"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/login"} passHref={true}>

<RadixThemesButton size={"3"} variant={"outline"}>

{"Login"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Fact-ity.png"}/>
<RadixThemesHeading size={"6"} weight={"bold"}>

{"FACT-ITY"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_home", ({  }), ({  })))], args, ({  }))))}>

{"Home"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_about_us", ({  }), ({  })))], args, ({  }))))}>

{"About"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_articles", ({  }), ({  })))], args, ({  }))))}>

{"usage guide"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_contact", ({  }), ({  })))], args, ({  }))))}>

{"Contact"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Separator/>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_login", ({  }), ({  })))], args, ({  }))))}>

{"Log in"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_register", ({  }), ({  })))], args, ({  }))))}>

{"Register"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<img css={({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Fact-ity.png"}/>
<RadixThemesHeading size={"6"} weight={"bold"}>

{"FACT-ITY"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesDropdownMenu.Root css={({ ["justify"] : "end" })}>

<RadixThemesDropdownMenu.Trigger>

<LucideMenuIcon css={({ ["color"] : "var(--current-color)" })} size={30}/>
</RadixThemesDropdownMenu.Trigger>
<RadixThemesDropdownMenu.Content>

<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_home", ({  }), ({  })))], args, ({  }))))}>

{"Home"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_about_us", ({  }), ({  })))], args, ({  }))))}>

{"About"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_articles", ({  }), ({  })))], args, ({  }))))}>

{"usage guide"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_contact", ({  }), ({  })))], args, ({  }))))}>

{"Contact"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Separator/>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_login", ({  }), ({  })))], args, ({  }))))}>

{"Log in"}
</RadixThemesDropdownMenu.Item>
<RadixThemesDropdownMenu.Item onClick={((...args) => (addEvents([(Event("reflex___state____state.factity___navigation___state____nav_state.to_register", ({  }), ({  })))], args, ({  }))))}>

{"Register"}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesBox css={({ ["width"] : "100%" })} id={"my-content-area-el"} ref={ref_my_content_area_el}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} id={"my-child"} justify={"center"} ref={ref_my_child} gap={"5"}>

<RadixThemesHeading size={"7"}>

{"Are you sure you want logout?"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesButton color={"gray"}>

{"No"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesButton onClick={((...args) => (addEvents([(Event("reflex___state____state.reflex_local_auth___local_auth____local_auth_state.factity___auth___state____session_state.perform_logout", ({  }), ({  })))], args, ({  }))))}>

{"Yes, please logout"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesIconButton css={({ ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "2rem", ["left"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={toggleColorMode}>

<Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
</RadixThemesIconButton>
<RadixThemesSeparator size={"4"}/>
<footer css={({ ["width"] : "100%", ["padding"] : "4em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} justify={"between"} gap={"6"}>

<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" })} gap={"4"}>

<RadixThemesHeading as={"h3"} size={"4"} weight={"bold"}>

{"PRODUCTS"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://www.langchain.com"} passHref={true}>

<RadixThemesText as={"p"} size={"4"}>

{"AI agents"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://colab.research.google.com/drive/1H3FQgQ_CpjXe1Vg1L_eQjzKlFdQ2qFzi?usp=sharing"} passHref={true}>

<RadixThemesText as={"p"} size={"4"}>

{"Colab link"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://txt.fyi/89d40f333dbf83f1"} passHref={true}>

<RadixThemesText as={"p"} size={"4"}>

{"Blog post"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://github.com/Mukullight"} passHref={true}>

<RadixThemesText as={"p"} size={"4"}>

{"Github"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["alignItems"] : "start" }), ["height"] : "100%" })} direction={"column"} justify={"center"} gap={"3"}>

<RadixThemesText as={"p"} size={"4"} weight={"bold"}>

{"Share your email to get the latest developments"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"center"} gap={"1"}>

<RadixThemesTextField.Root placeholder={"Your email address"} size={"3"} type={"email"}/>
<RadixThemesIconButton css={({ ["padding"] : "6px" })} size={"3"}>

<LucideArrowRightIcon css={({ ["padding"] : "0.15em", ["color"] : "var(--current-color)" })} size={36}/>
</RadixThemesIconButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} gap={"4"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["justifyContent"] : "start" }), ["width"] : "100%" })} direction={"row"} gap={"2"}>

<img css={({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" })} src={"/Fact-ity.png"}/>
<RadixThemesText as={"p"} css={({ ["whiteSpace"] : "nowrap" })} size={"3"} weight={"medium"}>

{"\u00a9 \ud83d\udc36 inc "}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["justifyContent"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["justifyContent"] : "end" }), ["width"] : "100%" })} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://www.instagram.com/mukul_namagiri/"} passHref={true}>

<LucideInstagramIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://x.com/MNamagiri66052"} passHref={true}>

<LucideXIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"https://www.linkedin.com/in/mukul-namagiri-434427190/"} passHref={true}>

<LucideLinkedinIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</footer>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Errorboundary_0ab9b2425dba9e30e1a4a2e7817cc0c7 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Fragment_699c3c317c8e1819c2e018b7276e730b/>
<NextHead>

<title>

{"Logout"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export default function Component() {
    




  return (
    <Errorboundary_0ab9b2425dba9e30e1a4a2e7817cc0c7/>
  )
}
