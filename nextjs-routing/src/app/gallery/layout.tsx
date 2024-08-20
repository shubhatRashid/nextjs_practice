export default function Layout(props: {children: React.ReactNode,model:React.ReactNode}) {
    return (
        <section>
            {props.children}
            {props.model}
        </section>
    );
}