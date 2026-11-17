# Estado del backend y seguridad

La aplicación funciona como prototipo frontend sin necesidad de credenciales externas. La integración de Supabase está preparada en `src/supabase.js`, `.env.example` y `supabase/schema.sql`, pero no está habilitada por defecto.

- No subir archivos `.env` ni claves privadas al repositorio.
- La clave `anon` de Supabase no reemplaza las políticas RLS.
- Antes de activar reservas persistentes, panel administrativo o datos de clientes, configurar autenticación, roles y políticas RLS.
- El panel `/admin` es demostrativo y no tiene autenticación. No utilizarlo para almacenar información sensible.
- Las solicitudes de reserva se guardan localmente en el navegador en esta versión de demostración.
