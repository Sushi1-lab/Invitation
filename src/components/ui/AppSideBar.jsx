export function AppSideBar() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar />
      </SidebarProvider>
    )
  }

  export default AppSideBar;
  