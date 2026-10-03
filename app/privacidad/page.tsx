import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre tus datos personales, el contacto por WhatsApp y tus derechos de privacidad en el sitio de Dilber Tuesta.",
  alternates: { canonical: "/privacidad", languages: { "es-PE": "/privacidad" } },
  openGraph: {
    title: "Política de privacidad | Dilber Tuesta",
    description: "Conoce cómo se utiliza la información al visitar esta web o consultar sobre una obra.",
    url: "/privacidad",
  },
};

const sections = [
  ["responsable", "Quién atiende tus datos"],
  ["informacion", "Qué información se utiliza"],
  ["finalidades", "Para qué se utiliza"],
  ["terceros", "WhatsApp y otros proveedores"],
  ["cookies", "Cookies y navegación"],
  ["conservacion", "Conservación y protección"],
  ["derechos", "Tus derechos"],
  ["cambios", "Cambios en esta política"],
] as const;

const privacyWhatsApp = `${siteConfig.whatsappHref.split("?")[0]}?text=${encodeURIComponent("Hola Dilber, quiero hacer una consulta sobre privacidad y mis datos personales.")}`;

export default function PrivacyPage() {
  return (
    <>
      <Navbar solid homePath="/" />
      <main id="main-content" className={styles.main}>
        <header className={styles.header}>
          <Link href="/" className={styles.back}><ArrowLeft size={16} aria-hidden="true" /> Volver al inicio</Link>
          <p className={styles.eyebrow}><ShieldCheck size={18} aria-hidden="true" /> Tu información importa</p>
          <h1>Política de privacidad</h1>
          <p className={styles.intro}>Queremos que sepas qué sucede con tu información cuando visitas esta web o conversas con nosotros sobre tu proyecto.</p>
          <p className={styles.date}>Última actualización: <time dateTime="2026-10-02">2 de octubre de 2026</time></p>
        </header>

        <div className={styles.content}>
          <nav className={styles.index} aria-label="Contenido de la política">
            <p>En esta página</p>
            <ol>{sections.map(([id, title], index) => <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{title}</a></li>)}</ol>
          </nav>
          <article className={styles.article} aria-label="Política de privacidad">
            <section id="responsable">
              <h2>1. Quién atiende tus datos</h2>
              <p>El contacto responsable de las consultas recibidas a través de este sitio es <strong>{siteConfig.ownerName}</strong>, Maestro Constructor, en {siteConfig.city}, {siteConfig.region}, {siteConfig.country}.</p>
              <p>Puedes consultar sobre privacidad por WhatsApp o llamar al <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>. {siteConfig.privacyEmail && <>También puedes escribir a <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.</>}</p>
            </section>

            <section id="informacion">
              <h2>2. Qué información se utiliza</h2>
              <p>Esta web es informativa y no incluye formularios de registro ni de cotización. Si decides contactarnos por teléfono o WhatsApp, puedes compartir tu nombre, número de contacto y los detalles de tu proyecto, como ubicación, área aproximada, planos o fotografías.</p>
              <p>Compartir esa información es voluntario. Sin algunos detalles puede ser necesario pedir más información antes de preparar una propuesta. No necesitas enviar documentos de identidad, datos bancarios ni información sensible para una primera consulta.</p>
              <p>Al navegar, el servicio de alojamiento puede procesar datos técnicos, como la dirección IP, el navegador, la fecha de acceso y las páginas solicitadas, para entregar el sitio y gestionar su seguridad.</p>
            </section>

            <section id="finalidades">
              <h2>3. Para qué se utiliza</h2>
              <p>La información de una consulta se utiliza para responderte, comprender el trabajo que necesitas, revisar una posible cotización y coordinar contigo los siguientes pasos. Si contratas una obra, el tratamiento necesario para ese servicio debe detallarse en el acuerdo correspondiente.</p>
              <p>Visitar esta página o abrir un enlace de WhatsApp no equivale a autorizar campañas publicitarias. Cualquier finalidad distinta debe informarse y contar con la autorización que corresponda.</p>
            </section>

            <section id="terceros">
              <h2>4. WhatsApp y otros proveedores</h2>
              <p>Los botones de WhatsApp te llevan a un servicio externo. Al abrirlo, ese servicio puede recibir datos de conexión; el mensaje preparado se envía únicamente cuando tú decides enviarlo.</p>
              <p>WhatsApp trata información según su propia <a href="https://www.whatsapp.com/legal/privacy-policy?lang=es" target="_blank" rel="noopener noreferrer">política de privacidad</a>. Sus proveedores pueden procesar información fuera del Perú. Puedes optar por una llamada si prefieres no utilizar esa plataforma.</p>
              <p>El proveedor de alojamiento interviene en la entrega y seguridad de la web. Esta política no sustituye las condiciones de los servicios externos ni regula otros sitios a los que accedas desde sus enlaces.</p>
            </section>

            <section id="cookies">
              <h2>5. Cookies y navegación</h2>
              <p>La versión actual de esta web no incorpora herramientas de analítica, píxeles publicitarios ni cookies de seguimiento propias. Las imágenes, las fuentes y los vídeos se sirven como recursos del sitio. Los recorridos de obras se reproducen cuando los activas; el vídeo decorativo de la portada puede reproducirse automáticamente, sin sonido, en escritorio, y dispone de un control para pausarlo. En móvil o si prefieres reducir el movimiento, se muestra una fotografía.</p>
              <p>WhatsApp u otros sitios externos pueden utilizar sus propias cookies cuando los visitas. Puedes gestionar las cookies desde la configuración de tu navegador.</p>
            </section>

            <section id="conservacion">
              <h2>6. Conservación y protección</h2>
              <p>La información de contacto se conserva durante el tiempo necesario para atender la consulta, dar seguimiento al proyecto y cumplir las obligaciones que resulten aplicables. Puedes solicitar que se cierre tu consulta y se revise la eliminación de los datos que ya no sean necesarios.</p>
              <p>El acceso a las conversaciones debe limitarse a quienes necesiten atenderlas. Las medidas de seguridad y los plazos de conservación de los registros técnicos y de WhatsApp también dependen de los proveedores de esos servicios.</p>
            </section>

            <section id="derechos">
              <h2>7. Tus derechos</h2>
              <p>La Ley N.º 29733, Ley de Protección de Datos Personales, y su reglamento reconocen derechos sobre tus datos. Puedes solicitar información, acceso, rectificación, cancelación u oposición al tratamiento, y revocar tu consentimiento cuando corresponda.</p>
              <p>Para iniciar una solicitud, contacta a {siteConfig.ownerName} e indica qué derecho deseas ejercer y a qué información se refiere. Se verificará tu identidad por un medio adecuado para evitar entregar datos a otra persona; la atención se sujetará a los requisitos y plazos aplicables.</p>
              <a className={styles.contact} href={privacyWhatsApp} target="_blank" rel="noopener noreferrer">Consultar sobre mis datos por WhatsApp</a>
              <p>También puedes consultar la orientación de la <a href="https://www.gob.pe/9269-iniciar-procedimiento-para-el-ejercicio-de-derechos-de-acceso-rectificacion-cancelacion-y-oposicion" target="_blank" rel="noopener noreferrer">Autoridad Nacional de Protección de Datos Personales</a> para conocer cómo ejercer tus derechos o presentar una reclamación.</p>
            </section>

            <section id="cambios">
              <h2>8. Cambios en esta política</h2>
              <p>Esta política se actualizará cuando cambien las funciones del sitio o la forma de tratar la información. La fecha de actualización aparecerá al inicio. Los cambios que requieran una nueva autorización deberán comunicarse y gestionarse antes de aplicar ese tratamiento.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer homePath="/" />
    </>
  );
}
